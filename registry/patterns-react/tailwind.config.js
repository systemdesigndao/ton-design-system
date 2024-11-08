const { tdsTheme } = require("../../package/index");
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["selector"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			...tdsTheme,
		},
	},
	plugins: [
		// tma: prefix
		plugin(function ({ addVariant, e }) {
			addVariant("tma", ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) => `.tma .${e(`tma${separator}${className}`)}`,
				);
			});
		}),
		// tma colors .bg-tg-theme-bg-color
		plugin(function ({ addUtilities }) {
			const tmaColors = {
				".tg-theme-bg-color": {
					backgroundColor: "var(--tg-theme-bg-color)",
				},
				".tg-theme-text-color": {
					color: "var(--tg-theme-text-color)",
				},
				".tg-theme-hint-color": {
					color: "var(--tg-theme-hint-color)",
				},
				".tg-theme-link-color": {
					color: "var(--tg-theme-link-color)",
				},
				".tg-theme-button-color": {
					backgroundColor: "var(--tg-theme-button-color)",
				},
				".tg-theme-button-text-color": {
					color: "var(--tg-theme-button-text-color)",
				},
				".tg-theme-secondary-bg-color": {
					backgroundColor: "var(--tg-theme-secondary-bg-color)",
				},
				".tg-theme-header-bg-color": {
					backgroundColor: "var(--tg-theme-header-bg-color)",
				},
				".tg-theme-bottom-bar-bg-color": {
					backgroundColor: "var(--tg-theme-bottom-bar-bg-color)",
				},
				".tg-theme-accent-text-color": {
					color: "var(--tg-theme-accent-text-color)",
				},
				".tg-theme-section-bg-color": {
					backgroundColor: "var(--tg-theme-section-bg-color)",
				},
				".tg-theme-section-header-text-color": {
					color: "var(--tg-theme-section-header-text-color)",
				},
				".tg-theme-section-separator-color": {
					borderColor: "var(--tg-theme-section-separator-color)",
				},
				".tg-theme-subtitle-text-color": {
					color: "var(--tg-theme-subtitle-text-color)",
				},
				".tg-theme-destructive-text-color": {
					color: "var(--tg-theme-destructive-text-color)",
				},
			};

			addUtilities(tmaColors, ["responsive", "hover"]);
		}),
	],
};
