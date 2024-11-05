import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cnMerge(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}