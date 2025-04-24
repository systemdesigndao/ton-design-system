import { create } from "zustand";
import { dark, light, matchMediaCasted, themeBaseKey, tma } from "@/theme";
import { ThemeState } from "./types";

const storedTheme = localStorage.getItem(themeBaseKey) as
	| typeof dark
	| typeof light | typeof tma;
const prefersDark = matchMediaCasted("(prefers-color-scheme: dark)").matches;

interface ThemeStore extends ThemeState {
	updateTheme: (theme: ThemeState["theme"]) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
	theme: storedTheme || (prefersDark ? dark : light),
	updateTheme: (theme) => set({ theme }),
}));
