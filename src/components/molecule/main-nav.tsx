"use client";

import type React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const NavItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "home",
    },
    {
      title: "Assinaturas",
      href: "/dashboard/assinaturas",
      icon: "subscriptions",
    },
    {
      title: "Relatórios",
      href: "/dashboard/relatorios",
      icon: "report",
    },
    {
      title: "Configurações",
      href: "/dashboard/configuracoes",
      icon: "settings",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {NavItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors text-zinc-800 dark:text-zinc-200 hover:text-zinc-950 hover:dark:text-zinc-50 hover:scale-110",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}

export { MainNav };
