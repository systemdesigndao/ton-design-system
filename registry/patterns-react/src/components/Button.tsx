import { cva } from "class-variance-authority";
import { type ClassValue, clsx } from "clsx";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-title1 font-medium",
	{
		variants: {
			variant: {
				default:
					"bg-white-1 text-black-5 border border-black-1 dark:bg-black-5/80 dark:text-white-1 dark:border-white-1",
			},
			size: {
				default: "h-10 px-4 py-2",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

type ButtonVariants = typeof buttonVariants;

type ParametersButtonVariants = Parameters<ButtonVariants>;

type PropsButtonVariants = ParametersButtonVariants[0];

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
}

export const Button = ({
	className,
	variant,
	size,
	children,
	...props
}: IButton & PropsButtonVariants) => {
	const Comp: keyof JSX.IntrinsicElements = "button";

	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		>
			{children}
		</Comp>
	);
};
