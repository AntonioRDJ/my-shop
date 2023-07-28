import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center rounded bg-secondary-200 text-sm font-medium text-zinc-900 hover:bg-secondary-300",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xl: "h-12 px-5",
    },
    success: {
      true: "bg-success-500 hover:bg-success-600",
    }
  },
  defaultVariants: {
    size: "default",
    success: false,
  }
});

export interface ButtonProps extends ComponentProps<"button">, VariantProps<typeof button> {

};

export function Button({ children, className, success, size, ...props }: ButtonProps) {
  return (
    <button className={button({className, size, success})} {...props}>
      {children}
    </button>
  )
}
