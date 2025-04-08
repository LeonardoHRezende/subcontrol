import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

type ValidationRowProps = {
  label: string;
  status: "success" | "error" | "neutral";
};

function ValidationRow({ label, status }: ValidationRowProps) {
  const icon =
    status === "success" ? (
      <Check className="w-4 h-4 text-green-500 dark:text-green-200" />
    ) : status === "error" ? (
      <X className="w-4 h-4 text-red-500 dark:text-red-5200" />
    ) : (
      <div className="w-4 h-4" />
    );

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      {icon}
      <span
        className={cn(
          status === "success" && "text-green-500 dark:text-green-200",
          status === "error" && "text-red-500 dark:text-red-200",
        )}
      >
        {label}
      </span>
    </div>
  );
}

export { ValidationRow };
