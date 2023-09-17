clean:
	rm -rf ./dist && yarn build

patch:
	npm version patch

minor:
	npm version minor

major:
	npm version major

publish:
	npm publish --access public

publish-patch:
	make clean
	make patch
	make publish

publish-minor:
	make clean
	make minor
	make publish

publish-major:
	make clean
	make major
	make publish