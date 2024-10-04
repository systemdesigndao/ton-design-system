clean:
	rm -rf ./dist && npm run build

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

update-registry-packages:
	(cd registry && (cd ./raw && pnpm up --latest) && (cd ./raw-framework && pnpm up --latest) && (cd ./raw-rust-wasm && pnpm up --latest) && (cd ./raw-wat && pnpm up --latest) && (cd ./react && pnpm up --latest))