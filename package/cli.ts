#! /usr/bin/env node

const fs = require('fs');
const path = require('path');
const { Command } = require('commander');
const prompts = require('prompts');
const os = require('os');

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

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

async function installDependencies(content: string, projectDir: string) {
    // only es6 imports support
    const packageNames = content.match(/import.*from\s+['"]([^'"]+)['"]/g)
        ?.map((line: any) => line.match(/['"]([^'"]+)['"]/)[1])
        .filter((pkg: string) => !pkg.startsWith('.') && !pkg.startsWith('/') && !pkg.startsWith('@') && !pkg.startsWith('~'));

        if (packageNames && packageNames.length) {
            try {
                console.log('Installing dependencies:', packageNames.join(', '));
                const childProcess = require('child_process');
                childProcess.execSync(`npm install ${packageNames.join(' ')}`, { stdio: 'inherit', cwd: projectDir });
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

async function parseComponentFromGitHub() {
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

async function main() {
  const program = new Command()
    .name("tds/cli")
    .description("Add components and dependencies to your project")
    .version("0.0.0", "-v, --version", "Display the version number")
    .option('-g, --github', 'Load from GitHub')

    program.parse();
    const options = program.opts();

    if (options.github) {
      await parseComponentFromGitHub();
    } else {
      console.log('Please specify a source: --github');
    }
}

main()