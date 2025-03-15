#!/usr/bin/env node

import path from 'path';
import fs from 'fs/promises';
import { spawn } from 'child_process';
import readline from 'readline';

interface Library {
  name: string;
  path: string;
}

interface Component {
  name: string;
  path: string;
}

const rootPath = process.cwd();

process.on("SIGINT", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));

let packageManager: string | undefined;

function runCommand(command: string, args: string[], options = {}) {
  return new Promise((resolve, reject) => {
    const proc = spawn(command, args, { stdio: 'inherit', ...options });

    proc.on('exit', (code: any) => {
      if (code === 0) {
        resolve(null);
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

async function copyDirectory(source: string, destination: string) {
  try {
    await fs.cp(source, destination, { recursive: true });
    console.log('Project copied successfully.');
  } catch (error) {
    console.error('Error copying the project:', error);
  }
}

function runGitCommand(args: any, options = {}) {
  return new Promise((resolve, reject) => {
    const gitProcess = spawn('git', args, { stdio: 'inherit', ...options });

    gitProcess.on('exit', (code: number) => {
      if (code === 0) {
        resolve(null);
      } else {
        reject(new Error(`git ${args.join(' ')} exited with code ${code}`));
      }
    });
  });
}

async function cloneRepository(repoUrl: string, destDir: string) {
  try {
    try {
      await fs.rm(destDir, { recursive: true, force: true });
    } catch {}

    await runGitCommand(['clone', repoUrl, destDir]);
    console.log('Repository cloned successfully.');
  } catch (error) {
    console.error('Failed to clone repository:', error);
  }
}

async function determinePackageManager(projectDir: string): Promise<string | undefined> {
  if (!packageManager) {
    const exists = async (pckMngr: 'pnpm-lock.yaml' | 'yarn.lock' | 'package-lock.json') => {
      try {
        await fs.access(path.join(projectDir, pckMngr));
        return true;
      } catch {
        return false;
      }
    };

    if (await exists('pnpm-lock.yaml')) {
      packageManager = 'pnpm';
      console.log('Detected pnpm!');
      return 'pnpm';
    } else if (await exists('yarn.lock')) {
      packageManager = 'yarn';
      console.log('Detected yarn!');
      return 'yarn';
    } else if (await exists('package-lock.json')) {
      packageManager = 'npm';
      console.log('Detected npm!');
      return 'npm';
    }
  }
  return packageManager;
}

async function installDependencies(projectDir: string) {
  const packageManager = await determinePackageManager(projectDir);
  if (!packageManager) throw new Error('Package manager not detected.');

  await runCommand(packageManager, ['install'], { cwd: projectDir });
}

async function promptQuestion(query: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function parseComponentsFromGitHub() {
  const destDir = '__tds__';
  await cloneRepository('https://github.com/systemdesigndao/ton-design-system', destDir);

  const registryDir = path.join(process.cwd(), destDir, 'registry');

  const libraries: Library[] = (await fs.readdir(registryDir)).map((name: string) => {
    return { name, path: path.join(registryDir, name) };
  });

  const selectionResponse = await promptWithArrowKeys('What do you want to copy?', ['project', 'component']);

  if (selectionResponse === 'project') {
    const projectResponse = await promptWithArrowKeys(
      'Select the project to copy:',
      libraries.map((lib) => lib.name)
    );
    const projectNameResponse = await promptQuestion('Enter your project name: ');

    const sourcePath = path.join(registryDir, projectResponse);
    const destinationPath = path.join(rootPath, projectNameResponse);

    await copyDirectory(sourcePath, destinationPath);
    await installDependencies(destinationPath);
  } else if (selectionResponse === 'component') {
    const selectedLibraryResponse = await promptWithArrowKeys(
      'Select library/framework:',
      libraries.map((lib) => lib.name)
    );
    const componentsDir = path.join(registryDir, selectedLibraryResponse, 'src/components');
    const components: Component[] = (await fs.readdir(componentsDir)).map((name: string) => {
      return { name, path: path.join(componentsDir, name) };
    });

    const selectedComponentResponse = await promptWithArrowKeys(
      'Select component:',
      components.map((comp) => comp.name)
    );

    const selectedComponentPath = path.join(componentsDir, selectedComponentResponse);
    const destinationPath = path.join(rootPath, 'src', 'components', selectedComponentResponse);

    const componentContent = await fs.readFile(selectedComponentPath, 'utf-8');
    await fs.mkdir(path.dirname(destinationPath), { recursive: true });
    await fs.writeFile(destinationPath, componentContent);
    console.log(`Component ${selectedComponentResponse} has been copied to ${destinationPath}`);
  }

  try {
    console.log('Cleaning up...');
    await fs.rm(path.join(rootPath, destDir), { recursive: true, force: true });
    console.log('Cleanup complete.');
  } catch (error) {
    console.error('Error during the cleanup process:', error);
  }
}

// To install tailwind css please go to last docs
// Previously here was command to install Tailwind V3 until V4 breaking changes
// https://tailwindcss.com/docs/installation/using-postcss

// In react and vanjs patterns I had used this way
// https://tailwindcss.com/docs/installation/using-postcss
async function initTDS(projectDir: string) {
  console.log('Initializing TON Design System...');

  try {
    const packageManager = await determinePackageManager(projectDir);
    if (!packageManager) throw new Error('Package manager could not be determined.');

    await runCommand(packageManager, ['add', '@designervoid/ton-design-system'], { cwd: projectDir });

    const indexPath = path.join(projectDir, 'src', 'index.css');
    const indexContent = `
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));
@custom-variant tma (&:where(.tma, .tma *));

@import "@designervoid/ton-design-system/lib/tw_v4.css"

@layer base {
  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
}
    `.trim();
    await fs.writeFile(indexPath, indexContent);

    console.log('TON Design System initialized successfully.');
  } catch (error) {
    console.error('Error initializing TON Design System:', error);
  }
}

async function promptWithArrowKeys(question: string, choices: string[]): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    let selectedIndex = 0;

    function renderMenu() {
      console.clear();
      console.log(question);
      choices.forEach((choice, index) => {
        if (index === selectedIndex) {
          console.log(`> ${choice}`);
        } else {
          console.log(`  ${choice}`);
        }
      });
    }

    function onKeyPress(str: string, key: any) {
      if (key.name === 'up') {
        selectedIndex = (selectedIndex - 1 + choices.length) % choices.length;
        renderMenu();
      } else if (key.name === 'down') {
        selectedIndex = (selectedIndex + 1) % choices.length;
        renderMenu();
      } else if (key.name === 'return') {
        rl.removeAllListeners('keypress');
        rl.close();
        resolve(choices[selectedIndex]);
      } else if (key.name === 'escape' || key.name === 'q') {
        rl.removeAllListeners('keypress');
        rl.close();
        resolve('');
      }
    }

    readline.emitKeypressEvents(process.stdin);
    if (process.stdin.isTTY) {
      process.stdin.setRawMode(true);
    }

    process.stdin.on('keypress', onKeyPress);

    renderMenu();
  });
}

async function main() {
  const args = process.argv.slice(2);
  const userCwd = process.cwd();

  if (args.includes('--github')) {
    await parseComponentsFromGitHub();
  } else if (args.includes('--tondesignsystem')) {
    await initTDS(userCwd);
  } else {
    console.log('Please specify a source: --github, --tailwind, --tondesignsystem or --help');
  }
}

main();
