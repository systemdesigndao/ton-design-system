type MediaQuery = "(prefers-color-scheme: dark)";
type BaseKey = "theme";

export const matchMediaCasted = (query: MediaQuery) => {
	return window.matchMedia(query);
};

const themes = ["light", "dark", "tma"] as const;

export const [light, dark, tma] = themes;

export const themeBaseKey: BaseKey = "theme";

document.documentElement.classList.toggle(
	dark,
	localStorage.theme === dark ||
		(!(themeBaseKey in localStorage) &&
			matchMediaCasted("(prefers-color-scheme: dark)").matches),
);
