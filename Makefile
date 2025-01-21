clean:
	rm -rf ./dist && npm run build

manual:
	npm version $(VERSION)

prepatch:
	npm version prepatch

prerelease:
	npm version prerelease

patch:
	npm version patch

minor:
	npm version minor

major:
	npm version major

publish:
	npm publish --access public

publish-manual:
	make clean
	make manual VERSION=$(VERSION)
	make publish

publish-prerelease:
	make clean
	make prerelease
	make publish

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

update-registry-packages:
	find registry -maxdepth 1 -mindepth 1 -type d -exec sh -c 'cd "{}" && pnpm up --latest' \;