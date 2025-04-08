import * as React from "react";

import { cn } from "@/lib/utils";

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950",
        className
      )}
      {...props}
    />
  );
}

export { Container };
