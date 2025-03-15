import WebApp from "@twa-dev/sdk";

export const tailwindPluginMountAppInject = () => {
	if (typeof window !== "undefined" && !!WebApp?.initData) {
		document.documentElement.classList.add("tma");
	}
};
