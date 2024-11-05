import { defineConfig } from "@rsbuild/core";

export default defineConfig({
	plugins: [],
	html: {
		template: "./src/index.html",
	},
	source: {
		entry: {
			index: "./src/main.ts",
		},
	},
});
