prod:
	npm run build
	cp src/index.css dist
	cp index-prod.html dist/index.html

publish:
	rm -rf ./dist
	npm version patch
	npm run build
	npm publish