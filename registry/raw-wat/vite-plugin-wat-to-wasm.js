import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';

function watToWasm() {
  return {
    name: 'vite-plugin-wat-to-wasm',
    async handleHotUpdate({ file, server }) {
      if (file.endsWith('.wat')) {
        const wasmFile = getWasmFilePath(file);
        await compileWatToWasm(file, wasmFile);
        server.ws.send({
          type: 'full-reload',
        });
      }
    },
    async buildStart() {
      const watFiles = await getWatFiles('wat');
      for (const watFile of watFiles) {
        const wasmFile = getWasmFilePath(watFile);
        await compileWatToWasm(watFile, wasmFile);
      }
    },
  };
}

function getWasmFilePath(watFile) {
  const publicDir = path.join(process.cwd(), 'public');
  const relativePath = path.relative(path.join(process.cwd(), 'wat'), watFile);
  const wasmFile = path.join(publicDir, relativePath).replace('.wat', '.wasm');
  return wasmFile;
}

async function getWatFiles(dir) {
  let files = await fs.readdir(dir);
  files = await Promise.all(files.map(async file => {
    const filePath = path.join(dir, file);
    const stat = await fs.stat(filePath);
    if (stat.isDirectory()) {
      return getWatFiles(filePath);
    } else if (filePath.endsWith('.wat')) {
      return filePath;
    }
  }));
  return files.flat().filter(Boolean);
}

function compileWatToWasm(watFile, wasmFile) {
  return new Promise((resolve, reject) => {
    const wasmDir = path.dirname(wasmFile);
    fs.mkdir(wasmDir, { recursive: true }).then(() => {
      exec(`npx -p wabt wat2wasm ${watFile} -o ${wasmFile}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error compiling ${watFile}: ${stderr}`);
          return reject(error);
        }
        console.log(`Compiled ${watFile} to ${wasmFile}`);
        resolve(stdout);
      });
    }).catch(reject);
  });
}

export default watToWasm;
