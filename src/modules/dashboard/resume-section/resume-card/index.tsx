import { JSX } from "react";

import { Badge } from "@/components/atoms/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

interface ResumeCardProps {
  title: string;
  value: string;
  percentage?: string;
  icon?: JSX.ElementType;
  footer: string;
  footerDescription: string | string[];
}

function ResumeCard({
  title,
  value,
  icon,
  footer,
  footerDescription,
  percentage = "+12.5%",
}: ResumeCardProps) {
  const Icon = icon;

  return (
    <Card className="bg-zinc-800 dark:bg-zinc-100 relative min-h-[150px]">
      <CardHeader>
        <CardDescription className="text-zinc-300 dark:text-zinc-700">
          {title}
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums text-zinc-100 dark:text-zinc-900">
          {value}
        </CardTitle>

        {Icon && (
          <div className="absolute right-4 top-4">
            <Badge
              variant="outline"
              className="flex items-center gap-1 rounded-lg text-xs text-zinc-900 bg-zinc-300"
            >
              <Icon size={22} strokeWidth={2} />
              {percentage}
            </Badge>
          </div>
        )}
      </CardHeader>

      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="flex flex-wrap gap-2 font-medium text-zinc-300 dark:text-zinc-600">
          {Array.isArray(footerDescription) ? (
            footerDescription.map((desc, index) => (
              <p key={index}>
                {desc}
                {index < footerDescription.length - 1 && ","}
              </p>
            ))
          ) : (
            <p>{footerDescription}</p>
          )}
          {Icon && <Icon size={20} strokeWidth={2} />}
        </div>
        <div className="text-muted-foreground">
          <p className="text-zinc-200 dark:text-zinc-800">{footer}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export { ResumeCard };
