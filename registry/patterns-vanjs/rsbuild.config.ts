import { defineConfig } from "@rsbuild/core";

export default defineConfig({
	plugins: [],
	html: {
		template: "./index.html",
	},
	source: {
		entry: {
			index: "./main.ts",
		},
	},
});
