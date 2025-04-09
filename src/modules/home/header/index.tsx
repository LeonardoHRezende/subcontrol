import { Button } from "@/components/atoms/button";
import { MainNav } from "@/components/molecule/main-nav";
import { APP_ROUTES } from "@/utils/app-routes";
import Link from "next/link";

function HeaderHome() {
  return (
    <header className="border-b border-b-zinc-800 dark:border-b-zinc-50 w-full sticky top-0 z-50 bg-zinc-50 dark:bg-zinc-950">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex gap-5 items-center">
          <Link
            className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:cursor-pointer"
            href={APP_ROUTES.home}
          >
            subcontrol
          </Link>
          <MainNav />
        </div>
        <div className="hidden md:block space-x-3">
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
      </div>
    </header>
  );
}
export { HeaderHome };
