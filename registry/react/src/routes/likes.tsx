import { useLayoutEffect, useState } from "react";
import { Button } from "@/components/Button";
import { matchMediaCasted, themeBaseKey } from "../theme";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/likes")({
	component: HomeComponent,
});

const Like = () => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<span>❤️</span>
			{count}
			<Button
				onClick={() => {
					setCount((prev) => {
						let local = prev;
						return ++local;
					});
				}}
			>
				+
			</Button>
		</div>
	);
};

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
		<div className="px-2 py-2 h-full flex flex-col">
			{Array.from({ length: 1e4 }).map((_, index) => (
				<Like key={`like-component-${index.toString()}`} />
			))}
		</div>
	);
}

export default HomeComponent;
