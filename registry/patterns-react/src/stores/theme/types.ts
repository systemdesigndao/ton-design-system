import { dark, light } from "@/theme";

export interface ThemeState {
	theme: typeof dark | typeof light | null;
}
