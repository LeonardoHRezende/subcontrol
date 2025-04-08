import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  error?: boolean;
  helperText?: string;
  rightSlot?: React.ReactNode; // <- novo
};

function Input({
  className,
  type,
  error,
  helperText,
  rightSlot,
  ...props
}: InputProps) {
  return (
    <div className="space-y-1 relative">
      <input
        type={type}
        aria-invalid={error}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 pr-10 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[1px]",
          className
        )}
        {...props}
      />
      {!!rightSlot && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          {rightSlot}
        </div>
      )}
      {helperText && (
        <p className="text-sm text-start ml-2 text-red-400">{helperText}</p>
      )}
    </div>
  );
}


export { Input };
