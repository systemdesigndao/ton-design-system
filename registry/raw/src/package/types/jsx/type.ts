import { JSXProps } from "./props";

export type JSXType = string | ((props: JSXProps) => JSX.Element);