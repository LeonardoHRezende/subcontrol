import { Shell } from "lucide-react";
import Link from "next/link";
import { APP_ROUTES } from "@/utils/app-routes";

function Logo() {
  return (
    <Link
      className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 hover:cursor-pointer text-center"
      href={APP_ROUTES.home}
    >
      <span className="flex items-center gap-2">
        <Shell size={22} />
        <span>subcontrol</span>
      </span>
    </Link>
  );
}

export {
  Logo,
};
