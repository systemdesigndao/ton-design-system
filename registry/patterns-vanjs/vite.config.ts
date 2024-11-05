import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  esbuild: {
    jsxFactory: 'jsx',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});