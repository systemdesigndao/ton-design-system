preview:
	npm run build
	cp src/index.css dist
	cp preview.html dist/index.html

publish:
	npm run prod:postcss
	npm run batch-pcss:prod
	npm version patch
	npm publish --access public