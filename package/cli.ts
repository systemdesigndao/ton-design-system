#! /usr/bin/env node

const path = require('path');
const { Command } = require('commander');
const prompts = require('prompts');
const os = require('os');
const simpleGit = require('simple-git');
const git = simpleGit();
const { spawn, spawnOptions } = require('child_process');
const fse = require('fs-extra');

interface Library {
  name: string;
  path: string;
}

interface Component {
  name: string;
  path: string;
}

const rootPath = process.cwd();

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

let packageManager: string | undefined;

function removeMetaContent(content: string) {
  return content.split('\n').slice(content.split('\n').findIndex(line => line.includes('// --'))).join('\n');
}

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
    await fse.copy(source, destination);
    console.log('Project copied successfully.');
  } catch (error) {
    console.error('Error copying the project:', error);
  }
}

async function cloneRepository(repoUrl: string, destDir: string) {
  try {
    if (await fse.pathExists(destDir)) {
      await fse.remove(destDir);
    }
    await git.clone(repoUrl, destDir);
    console.log('Repository cloned successfully.');
  } catch (error) {
    console.error('Failed to clone repository:', error);
  }
}

function determinePackageManager(projectDir: string): string | undefined {  
  if (packageManager === undefined) {
    const exists = (pckMngr: 'pnpm-lock.yaml' | 'yarn.lock' | 'package-lock.json') => {
      return fse.existsSync(path.join(projectDir, pckMngr));
    }
  
    if (exists('pnpm-lock.yaml')) {
      packageManager = 'pnpm';
      console.log('Detected pnpm!');
      return 'pnpm';
    } else if (exists('yarn.lock')) {
      packageManager = 'yarn';
      console.log('Detected yarn!');
      return 'yarn';
    } else if (exists('package-lock.json')) {
      packageManager = 'npm';
      console.log('Detected npm!');
      return 'npm';
    }
  } else {
    return packageManager;
  }
}

async function installDependencies(projectDir: string) {
  const packageManager = determinePackageManager(projectDir);

  return new Promise((resolve, reject) => {
    const install = spawn(packageManager, ['install'], { cwd: projectDir, stdio: 'inherit' });

    install.on('close', (code: number) => {
      if (code === 0) {
        console.log('Dependencies installed successfully.');
        resolve(null);
      } else {
        console.error(`Error installing dependencies. Exit code: ${code}`);
        reject(new Error('Failed to install dependencies'));
      }
    });
  });
}

async function parseComponentsFromGitHub() {
  const destDir = '__tds__';
  await cloneRepository('https://github.com/systemdesigndao/ton-design-system', destDir);

  const registryDir = path.join(process.cwd(), destDir, 'registry');

  const libraries: Library[] = fse.readdirSync(registryDir).map((name: string) => {
    return { name, path: path.join(registryDir, name) };
  });

  const selectionResponse = await prompts({
    type: 'select',
    name: 'selection',
    message: 'What do you want to copy?',
    choices: [
      { title: 'Project', value: 'project' },
      { title: 'Component', value: 'component' }
    ]
  });

  if (selectionResponse.selection === 'project') {
    const projectResponse = await prompts({
      type: 'select',
      name: 'project',
      message: 'Select the project to copy',
      choices: libraries.map((lib) => ({ title: lib.name, value: lib.name }))
    });

    const projectNameResponse = await prompts({
      type: 'text',
      name: 'projectName',
      message: 'Enter your project name'
    });

    const sourcePath = path.join(registryDir, projectResponse.project);
    const destinationPath = path.join(rootPath, projectNameResponse.projectName);

    await copyDirectory(sourcePath, destinationPath);
    await installDependencies(destinationPath);
  } else if (selectionResponse.selection === 'component') {
    const selectedLibraryResponse = await prompts({
      type: 'select',
      name: 'library',
      message: 'Select library/framework',
      choices: libraries.map((lib) => ({ title: lib.name, value: lib.name }))
    });

    const componentsDir = path.join(registryDir, selectedLibraryResponse.library, 'src/components');
    const components: Component[] = fse.readdirSync(componentsDir).map((name: string) => {
      return { name, path: path.join(componentsDir, name) };
    });

    const selectedComponentResponse = await prompts({
      type: 'select',
      name: 'component',
      message: 'Select component',
      choices: components.map((comp) => ({ title: comp.name, value: comp.name }))
    });

    const selectedComponentPath = path.join(componentsDir, selectedComponentResponse.component);
    const destinationPath = path.join(rootPath, 'src', 'components', selectedComponentResponse.component);

    const componentContent = fse.readFileSync(selectedComponentPath, 'utf-8');
    await fse.promises.mkdir(path.dirname(destinationPath), { recursive: true });
    fse.writeFileSync(destinationPath, componentContent);
    console.log(`Component ${selectedComponentResponse.component} has been copied to ${destinationPath}`);
  }

  try {
    console.log('Cleaning up...');
    fse.rmSync(path.join(rootPath, destDir), { recursive: true, force: true });
    console.log('Cleanup complete.');
  } catch (error) {
    console.error('Error during the cleanup process:', error);
  }
}

async function initTDS(projectDir: string) {
  console.log('Initializing TON Design System...');

  try {
    const packageManager = determinePackageManager(projectDir);
    if (!packageManager) {
      throw new Error('Could not determine package manager');
    }

    await runCommand(packageManager, ['add', '@designervoid/ton-design-system'], { cwd: projectDir });

    const tailwindConfigPath = path.join(projectDir, 'tailwind.config.js');
    const tailwindConfigContent = `
const { tdsTheme } = require('@designervoid/ton-design-system');

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ...tdsTheme,
    },
  },
  plugins: [],
};
    `.trim();
    fse.writeFileSync(tailwindConfigPath, tailwindConfigContent);

    const indexPath = path.join(projectDir, 'src', 'index.css');
    const indexContent = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
}
    `.trim();
    fse.writeFileSync(indexPath, indexContent);

    console.log('TON Design System initialized successfully.');
  } catch (error) {
    console.error('Error initializing TON Design System:', error);
  }
}

async function initTailwind(projectDir: string) {
  console.log('Initializing Tailwind CSS...');

  try {
    const packageManager = determinePackageManager(projectDir);
    if (!packageManager) throw new Error('Package manager could not be determined.');

    await runCommand(packageManager, ['add', 'tailwindcss', 'postcss', 'autoprefixer', '-D'], { cwd: projectDir, stdio: 'inherit' });
    console.log('Dependencies installed successfully.');

    await runCommand('npx', ['tailwindcss', 'init', '-p'], { cwd: projectDir, stdio: 'inherit' });
    console.log('Tailwind CSS initialized successfully.');
  } catch (error) {
    console.error('Error initializing Tailwind CSS:', error);
    throw error;
  }
}

async function main() {
  const program = new Command()
    .name("tds/cli")
    .description("Add components and dependencies to your project")
    .version("0.0.0", "-v, --version", "Display the version number")
    .option('-g, --github', 'Load from GitHub')
    .option('-t, --tailwind', 'Initialize Tailwind CSS in your project')
    .option('-tds, --tondesignsystem', 'Initialize TON Design System in your project');

    // install rust 
      // curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    // init rust
      // cargo new rust_wasm_module
    // install wasm-pack
      // curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
    // install cargo-generate
      // cargo install cargo-generate

  program.parse();
  const options = program.opts();
  const userCwd = process.cwd();

  if (options.github) {
    await parseComponentsFromGitHub();
  } else if (options.tailwind) {
    await initTailwind(userCwd);
  } else if (options.tondesignsystem) {
    await initTDS(userCwd);
  } else {
    console.log('Please specify a source: --github, --tailwindCustom or --help');
  }
}

main()