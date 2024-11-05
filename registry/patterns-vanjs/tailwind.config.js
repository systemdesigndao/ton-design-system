const { tdsTheme } = require("../../package/index");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'media',
	content: [
		'./src/**/*.{ts,html}',
	],
	theme: {
		extend: {
			...tdsTheme,
		},
	},
	plugins: [],
};
