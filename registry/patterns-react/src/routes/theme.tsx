import { useLayoutEffect } from "react";
import { Button } from "@/components/Button";
import { dark, light, matchMediaCasted, themeBaseKey, tma } from "@/theme";
import { useThemeStore } from "@/stores/theme";
import WebApp from "@twa-dev/sdk";

export function ThemeComponent() {
	const { theme, updateTheme } = useThemeStore();

	const toggleTheme = (newTheme: typeof light | typeof dark) => {
		localStorage.setItem(themeBaseKey, newTheme);
		if (newTheme === light) {
			document.documentElement.classList.add(light);
			document.documentElement.classList.remove(dark);
		} else {
			document.documentElement.classList.remove(light);
			document.documentElement.classList.add(dark);
		}
		document.documentElement.classList.remove(tma);
		updateTheme(newTheme);
	};

	useLayoutEffect(() => {
		document.documentElement.classList.toggle(dark, theme === dark);

		const unsubscribe = matchMediaCasted(
			"(prefers-color-scheme: dark)"
		).addEventListener("change", ({ matches }) => {
			if (!localStorage.getItem(themeBaseKey)) {
				updateTheme(matches ? dark : light);
			}
		});

		return unsubscribe;
	}, [theme]);

	return (
		<div className="flex flex-col h-dvh w-full">
			<p className="text-white-5 dark:text-white-1 tma:text-tg-theme-text-color">Legend:</p>
			<p className="text-white-5 dark:text-white-1 tma:text-tg-theme-text-color">🖥️ - system theme</p>
			<p className="text-white-5 dark:text-white-1 tma:text-tg-theme-text-color">🌚 - dark theme</p>
			<p className="text-white-5 dark:text-white-1 tma:text-tg-theme-text-color">🌝 - light theme</p>
			{WebApp.initData && <p className="text-white-5 dark:text-white-1 tma:text-tg-theme-text-color">📱 - tma theme</p>}
			<Button
				onClick={() => {
					document.documentElement.classList.remove(tma, dark, light);
					localStorage.removeItem(themeBaseKey);
					const prefersDark = matchMediaCasted(
						"(prefers-color-scheme: dark)"
					).matches;
					updateTheme(prefersDark ? dark : light);
				}}
				className="mt-1 w-fit"
			>
				to 🖥️
			</Button>
			<Button onClick={() => toggleTheme(dark)} className="w-fit mt-1">
				to 🌚
			</Button>
			<Button onClick={() => toggleTheme(light)} className="w-fit mt-1">
				to 🌝
			</Button>
			{WebApp.initData && (
				<Button
					onClick={() => {
						localStorage.setItem(themeBaseKey, tma);
						document.documentElement.classList.remove(dark, light);
						document.documentElement.classList.add(tma);
						updateTheme(tma);
					}}
					className="w-fit mt-1"
				>
					to 📱
				</Button>
			)}
		</div>
	);
}
