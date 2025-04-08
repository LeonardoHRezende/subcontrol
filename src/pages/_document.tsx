import type React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { Toaster } from "@/components/ui/sonner"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Main />
          <Toaster />
          <NextScript />
        </ThemeProvider>
      </body>
    </Html>
  );
}
