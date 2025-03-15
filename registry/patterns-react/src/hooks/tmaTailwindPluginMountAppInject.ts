import { matchMediaCasted, themeBaseKey, tma } from "@/theme";
import WebApp from "@twa-dev/sdk";

export const tailwindPluginMountAppInject = () => {
	if (typeof window !== "undefined" && !!WebApp?.initData) {
		document.documentElement.classList.add("tma");
		document.documentElement.classList.toggle(
			tma,
			localStorage.theme === tma ||
				(!(themeBaseKey in localStorage) &&
					matchMediaCasted("(prefers-color-scheme: dark)").matches),
		);
		
	}
};
