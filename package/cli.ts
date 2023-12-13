#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const prompts = require('prompts');
const os = require('os');

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

let packageManager: string | undefined;

type GitHubItem = {
  name: string;
  path: string;
};

type GitHubApiResponse = {
  payload: {
    tree: {
        items: GitHubItem[];
    },
    blob: {
        rawLines: string[];
    }
  };
};

function determinePackageManager(projectDir: string): string | undefined {  
  if (packageManager === undefined) {
    const exists = (pckMngr: 'pnpm-lock.yaml' | 'yarn.lock' | 'package-lock.json') => {
      return fs.existsSync(path.join(projectDir, pckMngr));
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

async function installDependencies(content: string, projectDir: string) {
    // only es6 imports support
    const packageNames = content.match(/import.*from\s+['"]([^'"]+)['"]/g)
        ?.map((line: any) => line.match(/['"]([^'"]+)['"]/)[1])
        .filter((pkg: string) => !pkg.startsWith('.') && !pkg.startsWith('/') && !pkg.startsWith('~'));

    if (packageNames && packageNames.length) {
      try {
        const packageManager = determinePackageManager(projectDir);
        const installCommand = `${packageManager} add ${packageNames.join(' ')}`;
        console.log(`Installing dependencies with ${packageManager}:`, packageNames.join(', '));
        const childProcess = require('child_process');
        childProcess.execSync(installCommand, { stdio: 'inherit', cwd: projectDir });
        console.log('Dependencies installed successfully.');
        process.exit(0);
      } catch (error) {
        console.error('Error installing dependencies:', error);
        process.exit(1);
      }
    }
}

function removeMetaContent(content: string) {
  return content.split('\n').slice(content.split('\n').findIndex(line => line.includes('// --'))).join('\n');
}

async function saveFile(content: string, filename: string) {
  try {
    const userCwd = process.cwd();
    const filePath = path.join(userCwd, 'src', filename);
    const cleanedContent = removeMetaContent(content);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });
    await fs.promises.writeFile(filePath, cleanedContent);
    console.log(`File saved: ${filePath}`);
    await installDependencies(cleanedContent, userCwd);
  } catch (error) {
    console.error(error);
  }
}

async function parseComponentsFromGitHub() {
  console.log('Exploring GitHub...');

  const registryBaseUrl = 'https://github.com/systemdesigndao/ton-design-system/tree/master/registry';

  const registryResponse = await fetch(registryBaseUrl);
  const registryData = await registryResponse.json() as GitHubApiResponse;
  const libraries = registryData.payload.tree.items;

  const selectedLibraryResponse = await prompts({
      type: 'text',
      name: 'libraryIndex',
      message: `Select library/framework\n${JSON.stringify(libraries.map((library, index: number) => `${index} -> ${library.name}`))}`,
  });

  const componentsUrl = `https://github.com/systemdesigndao/ton-design-system/tree/master/${libraries[selectedLibraryResponse.libraryIndex].path}/src/components`;
  const componentsResponse = await fetch(componentsUrl);
  const componentsData = await componentsResponse.json() as GitHubApiResponse;

  const selectedComponentResponse = await prompts({
      type: 'text',
      name: 'componentIndex',
      message: `Select component\n${JSON.stringify(componentsData.payload.tree.items.map((component, index: number) => `${index} -> ${component.name}`))}`,
  });

  const componentUrl = `https://github.com/systemdesigndao/ton-design-system/tree/master/${componentsData.payload.tree.items[selectedComponentResponse.componentIndex].path}`;
  const componentResponse = await fetch(componentUrl);
  const componentData = await componentResponse.json() as GitHubApiResponse;

  await saveFile(componentData.payload.blob.rawLines.join('\n'), `${componentsData.payload.tree.items[selectedComponentResponse.componentIndex].name}`);
}

async function initTDS(projectDir: string) {
  console.log('Initializing TON Design System...');

  const packageManager = determinePackageManager(projectDir);
  const commands = [
    `${packageManager} add @designervoid/ton-design-system`,
  ];

  const tailwindConfigJsPath = path.join(projectDir, 'tailwind.config.js');
  const tailwindConfigTsPath = path.join(projectDir, 'tailwind.config.ts');
  let tailwindConfigPath = '';

  if (fs.existsSync(tailwindConfigTsPath)) {
    tailwindConfigPath = tailwindConfigTsPath;
  } else if (fs.existsSync(tailwindConfigJsPath)) {
    tailwindConfigPath = tailwindConfigJsPath;
  } else {
    tailwindConfigPath = tailwindConfigJsPath;
  }

  const tailwindConfigContent = `
const { tdsTheme } = require('@designervoid/ton-design-system');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...tdsTheme,
    },
  },
  plugins: [],
}
  `.trim();

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

  try {
    const childProcess = require('child_process');
    for (const cmd of commands) {
      childProcess.execSync(cmd, { stdio: 'inherit', cwd: projectDir });
    }

    console.log(`Creating or updating ${tailwindConfigPath}...`);
    fs.writeFileSync(tailwindConfigPath, tailwindConfigContent);

    console.log(`Creating or updating ${indexPath}...`);
    fs.writeFileSync(indexPath, indexContent);

    console.log('TON Design System initialized successfully.');
  } catch (error) {
    console.error('Error initializing TON Design System:', error);
    throw error;
  }
}


async function initTailwind(projectDir: string) {
  console.log('Initializing Tailwind CSS...');

  const commands = [
    `${determinePackageManager(projectDir)} add tailwindcss postcss autoprefixer -D`,
    `npx tailwindcss init -p`,
  ];

  try {
    const childProcess = require('child_process');
    for (const cmd of commands) {
      childProcess.execSync(cmd, { stdio: 'inherit', cwd: projectDir });
    }
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