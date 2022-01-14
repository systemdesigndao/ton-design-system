import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    customElement: true,
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: tag => tag.includes('-')
      }
    }
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'Index',
      fileName: format => `index.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core'],
    },
  },
  test: {
    runtimeEnv: 'dom',
  },
})
