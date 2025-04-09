"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { APP_ROUTES } from "@/utils/app-routes";

import { MainNav } from "@/components/molecule/main-nav";
import { Button } from "@/components/atoms/button";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/atoms/drawer";

function HeaderHome() {
  return (
    <header className="border-b border-b-zinc-800 dark:border-b-zinc-50 w-full sticky top-0 z-50 bg-zinc-50 dark:bg-zinc-950">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex gap-5 items-center">
          <Link
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:cursor-pointer text-center"
            href={APP_ROUTES.home}
          >
            subcontrol
          </Link>

          {/* Menu Desktop */}
          <MainNav className="hidden md:block text-center"/>
        </div>

        {/* Ações Desktop */}
        <div className="hidden md:flex space-x-3">
          <Link href={APP_ROUTES.signin}>
            <Button
              variant="outline"
              className="border-zinc-300 dark:border-zinc-600 text-zinc-700 bg-zinc-300 dark:bg-zinc-700 
                dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:cursor-pointer"
            >
              Entrar
            </Button>
          </Link>
          <Link href={APP_ROUTES.signup}>
            <Button className="bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-300 hover:cursor-pointer">
              Cadastre-se
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger>
              <Menu className="text-zinc-900 dark:text-zinc-50" />
            </DrawerTrigger>
            <DrawerTitle className="hidden">subcontrol</DrawerTitle>
            <DrawerContent>
              <div className="py-10 px-4 space-y-15 flex flex-col h-full">
                <div className="flex flex-col gap-4 text-center">
                  <Link
                    className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:cursor-pointer"
                    href={APP_ROUTES.home}
                  >
                    subcontrol
                  </Link>
                  <MainNav className="flex flex-col gap-4" />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <Link href={APP_ROUTES.signin} className="w-full">
                    <Button
                      variant="outline"
                      className="w-full border-zinc-300 dark:border-zinc-600 text-zinc-700 bg-zinc-300 dark:bg-zinc-700 
                    dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:cursor-pointer"
                    >
                      Entrar
                    </Button>
                  </Link>
                  <Link href={APP_ROUTES.signup} className="w-full">
                    <Button
                      className="w-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 
                  dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-300 hover:cursor-pointer"
                    >
                      Cadastre-se
                    </Button>
                  </Link>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

export { HeaderHome };
