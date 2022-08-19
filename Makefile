preview:
	npm run build
	cp src/index.css dist
	cp preview.html dist/index.html

publish:
	yarn prod:postcss
	yarn batch-pcss:prod
	npm version patch
	npm publish