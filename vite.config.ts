import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Index',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    }
  },
  test: {
    // Use the DOM environment for all tests by default
    runtimeEnv: 'dom',
  },
} as UserConfigExport & {
  test: {
    runtimeEnv: 'dom'
  }
})
