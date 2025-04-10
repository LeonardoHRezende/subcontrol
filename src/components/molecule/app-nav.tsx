"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Settings,
  UserRoundPen,
  LayoutList,
  ChartNoAxesCombined,
  LogOut,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { logout } from "@/lib/supabase/auth";
import { Logo } from "./logo";

function NavigationBar() {
  const pathname = usePathname();

  const navItems = [
    { icon: Home, href: "/", isActive: pathname === "/", title: "Início" },
    {
      icon: LayoutList,
      href: "/my-subs",
      isActive: pathname === "/my-subs",
      title: "Assinaturas",
    },
    {
      icon: ChartNoAxesCombined,
      href: "/reports",
      isActive: pathname === "/reports",
      title: "Relatórios",
    },
    {
      icon: Settings,
      href: "/settings",
      isActive: pathname === "/settings",
      title: "Configurações",
    },
    {
      icon: UserRoundPen,
      href: "/edit",
      isActive: pathname === "/edit",
      title: "Perfil",
    },
    {
      icon: LogOut,
      href: "#",
      isActive: pathname === "/logout",
      title: "Sair",
      action: logout,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center gap-4 flex-wrap pt-4 transition-transform duration-300 hover:scale-120">
      <Logo />
      <nav className="bg-zinc-800 rounded-full px-5 py-3 inline-flex items-center gap-8 ">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={index}
              href={item.href}
              className="flex flex-col items-center justify-center relative group"
              onClick={item?.action}
            >
              <div
                className={cn(
                  "transition-all duration-200",
                  isActive
                    ? "text-white"
                    : "text-gray-400 hover:text-white group-hover:scale-125"
                )}
              >
                <Icon size={22} strokeWidth={2} />
              </div>
              <span className="absolute -bottom-8 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-zinc-800 dark:text-zinc-200">
                {item.title}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export { NavigationBar };
