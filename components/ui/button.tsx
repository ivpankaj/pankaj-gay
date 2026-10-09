import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-zinc-200 shadow-sm font-semibold transition-all",
        secondary:
          "bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800 transition-all",
        outline:
          "border border-zinc-800 bg-black text-white hover:bg-zinc-900 hover:border-zinc-700 transition-all",
        ghost:
          "hover:bg-zinc-900 text-zinc-400 hover:text-white transition-all",
        link: "text-white underline-offset-4 hover:underline",
        sky:
          "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-850 hover:border-zinc-700 transition-all",
        skySubtle:
          "bg-zinc-950 text-white border border-zinc-850 hover:bg-zinc-900 hover:border-zinc-700 transition-all",
        skyOutline:
          "bg-black text-white border border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700 transition-all",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-8 text-base",
        icon: "h-10 w-10 rounded-xl",
        iconLg: "h-14 w-14 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "secondary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
