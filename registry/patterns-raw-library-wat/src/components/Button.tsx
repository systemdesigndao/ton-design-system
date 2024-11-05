import { jsx } from "../package/jsx"
// --
import { cva } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-white-1 text-black-5 border border-black-1 dark:bg-black-5/80 dark:text-white-1 dark:border-white-1",
      },
      size: {
        default: "h-10 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export const Button = ({ className, variant, size, children, ...props }: any) => {
  return <button class={cn(buttonVariants({ variant, size, className }))} {...props}>{children}</button>
}