preview:
	npm run build
	cp src/index.css dist
	cp preview.html dist/index.html

publish:
	npm version patch
	npm publish --access public