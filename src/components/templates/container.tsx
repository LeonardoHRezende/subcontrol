import type * as React from "react"

import { cn } from "@/lib/utils"

function Container({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("min-h-screen mx-auto bg-zinc-50 dark:bg-zinc-950 p-4 grid place-items-center", className)}
      {...props}
    />
  )
}

export { Container }
