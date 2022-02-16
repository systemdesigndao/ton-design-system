preview:
	npm run build
	cp src/index.css dist
	cp preview.html dist/index.html

publish:
	npm version patch
	npm run prod:postcss
	npm publish