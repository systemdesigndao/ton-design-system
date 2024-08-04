import { jsx } from "@/package/jsx";
import { JSXProps } from "@/package/types";
import { cnMerge } from "@/utils";
import { cva } from "class-variance-authority";

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

export const Button = ({ className, variant, size, children, ...props }: JSXProps) => {
  return <button class={cnMerge(buttonVariants({ variant, size, className }))} {...props}>{children}</button>
}