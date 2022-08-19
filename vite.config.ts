import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import ViteFonts from 'vite-plugin-fonts'

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
    htmlPlugin(),
    ViteFonts({
      custom: {
        families: {
          'mulish': './public/fonts/Mulish-Regular.ttf',
          'mulish-black': './public/fonts/Mulish-Black.ttf',
          'mulish-extrabold': './public/fonts/Mulish-ExtraBold.ttf',
          'mulish-bold': './public/fonts/Mulish-Bold.ttf',
        },
      },
    }),
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
