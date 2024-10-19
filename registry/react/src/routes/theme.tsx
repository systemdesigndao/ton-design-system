import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/Button";
import { matchMediaCasted, themeBaseKey } from "../theme";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/theme")({
	component: HomeComponent,
});

function HomeComponent() {
	const prefersDark = matchMediaCasted("(prefers-color-scheme: dark)").matches;

	const [theme, setTheme] = useState(() => {
		const storedTheme = localStorage.getItem(themeBaseKey);
		return storedTheme || (prefersDark ? "dark" : "light");
	});

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
		localStorage.setItem(themeBaseKey, newTheme);
		document.documentElement.classList.toggle("dark", newTheme === "dark");
	};

	useLayoutEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");

		const unsubscribe = matchMediaCasted(
			"(prefers-color-scheme: dark)",
		).addEventListener("change", ({ matches }) => {
			if (!localStorage.getItem(themeBaseKey)) {
				setTheme(matches ? "dark" : "light");
			}
		});

		return unsubscribe;
	}, [theme]);

	return (
		<div className="px-2 py-2 flex flex-col bg-white-2/50 dark:bg-white-4/50 h-screen">
			<Button onClick={toggleTheme}>
				{localStorage.getItem(themeBaseKey)
					? `to ${theme === "dark" ? "light" : "dark"}`
					: "from system theme to force theme"}
			</Button>
		</div>
	);
}

export default HomeComponent;
