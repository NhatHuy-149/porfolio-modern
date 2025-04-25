import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva(
  "text-base leading-normal transition-all font-normal font-inter",
  {
    variants: {
      variant: {
        h1: "text-[120px] xxlMax:-[90px] tracking-[0.6px] leading-none",
        h2: "text-[36px] lgMax:text-[32px] mdMax:text-[28px] leading-[1.2em]",
        h3: "text-[30px] lgMax:text-[28px] mdMax:text-[24px] leading-[1.2em]",
        h4: "text-[24px] lgMax:text-[22px] mdMax:text-[20px] leading-[1.2em]",
        h5: "text-base lgMax:text-sm leading-6",
        p: "text-[16px] lgMax:text-[14px] font-normal	",
        span: "inline",
        div: "block",
      },
      color: {
        default: "text-secondary",
        primary: "text-primary",
        secondary: "text-secondary",
        tertiary: "text-tertiary", 
        description: "text-description",
      },
      size: {
        xs: "text-xs",
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg mdMax:text-base",
        xl: "text-xl mdMax:text-lg",
        "2xl": "text-2xl mdMax:text-xl",
        "3xl": "text-3xl mdMax:text-2xl",
        "4xl": "text-4xl mdMax:text-3xl",
        "5xl": "text-5xl mdMax:text-4xl",
      },
      textAlign: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
      lineHeight: {
        default: "leading-normal",
        relaxed: "leading-relaxed",
        tight: "leading-tight",
      },
      fontFamily: {
        inter: "font-inter",
        roboto: "font-roboto",
      },
      fontWeight: {
        thin: "font-thin",
        extralight: "font-extralight",
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
        black: "font-black",
      },
    },
    defaultVariants: {
      variant: "p",
      color: "default",
      fontWeight: "normal",
    },
  }
);

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  asChild?: boolean;
  fontFamily?: "inter" | "roboto" ;
  fontWeight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      className,
      variant,
      color,
      size,
      textAlign,
      lineHeight,
      fontFamily,
      fontWeight,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Component = variant || "p";

    return (
      <Component
        className={cn(
          typographyVariants({
            variant,
            color,
            size,
            textAlign,
            lineHeight,
            fontFamily,
            fontWeight,
            className,
          })
        )}
        ref={ref as any}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };
