import { dark, light, tma } from "@/theme";

export interface ThemeState {
	theme: typeof dark | typeof light | typeof tma | null;
}
