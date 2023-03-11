publish:
	rm -rf ./dist && yarn build
	npm version patch
	npm publish --access public