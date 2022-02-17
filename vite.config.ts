import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      // postcss inject in dev and prod, without that vite preview doesnt working ;(
      const pathToStyle = process.env.NODE_ENV === 'development' ? 'src/index.css' : '/style.css';
      return html.replace(
        /<title>(.*?)<\/title>/,
        `<link rel="stylesheet" href="${pathToStyle}">
    <title>Vite App</title>`
      )
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    htmlPlugin()
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
})
