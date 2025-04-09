// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: "Minha App",
  description: "Descrição da aplicação",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
