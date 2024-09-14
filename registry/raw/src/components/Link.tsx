import { jsx } from "@/package/jsx";
import { cva } from "class-variance-authority";
import classes from './Link.module.css';
import { JSXChild } from "@/package/types";

const linkVariants = cva(
  "whitespace-nowrap text-regular-3 font-medium",
  {
    variants: {
      variant: {
        default: `${classes.gradient_link}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export const Link = ({ variant, className, children, ...props }: { children: JSXChild } & { [key: string]: any }) => {
  return <a class={linkVariants({ variant, className })} {...props}>{children}</a>
}