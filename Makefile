publish:
	rm -rf ./dist
	npm version patch
	npm run build
	npm publish