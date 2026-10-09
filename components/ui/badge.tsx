import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-1 focus:ring-white",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-white text-black hover:bg-zinc-200",
        sky:
          "border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800",
        secondary:
          "border-transparent bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
        outline: "text-zinc-200 border-zinc-800",
      },
    },
    defaultVariants: {
      variant: "sky",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
