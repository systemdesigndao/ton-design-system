import { dark, light, matchMediaCasted, themeBaseKey } from "@/theme";
import { Store, useStore } from "@tanstack/react-store";
import { ThemeState } from "./types";

const storedTheme = localStorage.getItem(themeBaseKey) as typeof dark | typeof light;
const prefersDark = matchMediaCasted('(prefers-color-scheme: dark)').matches

export const themeStore = new Store<ThemeState>({
    theme: storedTheme || (prefersDark ? dark : light),
});

const updateTheme = (theme: ThemeState['theme']) => {
    themeStore.setState((state) => {
        return {
            ...state,
            theme,
        };
    });
};

export const useThemeStore = (): [ThemeState, { updateTheme: typeof updateTheme }] => [useStore(themeStore), { updateTheme }];