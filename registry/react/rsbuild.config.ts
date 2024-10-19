import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig({
	plugins: [pluginReact()],
	tools: {
		rspack: {
			plugins: [TanStackRouterRspack()],
		},
	},
	html: {
		template: "./index.html",
	},
	source: {
		entry: {
			index: "./src/main.tsx",
		},
	},
});
