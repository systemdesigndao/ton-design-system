import { defineConfig } from 'vite';
import path from 'path';
import watToWasm from './vite-plugin-wat-to-wasm';

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [watToWasm()],
});