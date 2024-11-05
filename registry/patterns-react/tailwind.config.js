const { tdsTheme } = require("../../package/index");

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			...tdsTheme,
		},
	},
	plugins: [],
};
