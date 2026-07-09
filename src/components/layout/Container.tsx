import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  size?: "sm" | "md" | "lg" | "xl" | "full";
} & HTMLAttributes<HTMLElement>;

const sizeMap = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-none",
} as const;

export function Container({
  as,
  size = "xl",
  className,
  children,
  ...props
}: ContainerProps) {
  const Comp = (as ?? "div") as ElementType;
  return (
    <Comp
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}