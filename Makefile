preview:
	npm run build
	cp src/index.css dist
	cp preview.html dist/index.html

publish:
	npm version patch
	npm run batch-pcss
	npm publish