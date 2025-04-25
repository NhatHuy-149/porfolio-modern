import * as React from "react";

import { cn } from "@/lib/utils";

import iconRight from "../../../public/icons/common/icon-right.svg";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, suffixIcon = true, ...props }, ref) => {
    return (
      <div className='relative h-fit flex items-center'>
        <textarea
          className={cn(
            "flex h-20 w-full rounded-lg bg-[#101624] px-[14px] py-[18px]  text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-foreground focus-visible:outline-none focus-visible:none focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-sm ",
            suffixIcon && "pr-10",
            className
          )}
          ref={ref}
          {...props}
        />

        {suffixIcon && suffixIcon}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
