const fs = require('fs');
const esbuild = require('esbuild');
const postCssPlugin = require("@deanc/esbuild-plugin-postcss");
const tailwindcss = require('@tailwindcss/postcss');

const isDev = process.env.NODE_ENV !== 'production';

async function buildAll() {
  try {
    await esbuild.build({
      entryPoints: ['./src/main.ts'],
      outfile: './dist/bundle.js',
      bundle: true,
      platform: 'browser',
      target: 'esnext',
      sourcemap: isDev,
      minify: !isDev,
      plugins: [
        postCssPlugin({
          plugins: [tailwindcss()]
        })
      ],
    });

    const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/raw.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>tds/raw-framework</title>
    <link rel="stylesheet" href="bundle.css">
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="bundle.js"></script>
  </body>
</html>`;

    fs.writeFileSync('./dist/index.html', htmlContent, 'utf8');

    console.log('Build completed successfully!');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildAll();

async function watch() {
  const ctx = await esbuild.context({
    entryPoints: ["./src/main.ts"],
    minify: false,
    outdir: "./dist",
    bundle: true,
    loader: { ".ts": "ts", ".css": "css" },
    plugins: [
      postCssPlugin({
        plugins: [tailwindcss()]
      })
    ],
  });

  const server = await ctx.serve({
    servedir: 'dist',
  });

  console.log('Served...', `http://localhost:${server.port}`);
}

watch();
