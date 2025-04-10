import { Card } from "@/components/atoms/card";
import { ComponentType } from "react";

type WithSkeletonProps = {
  isLoading?: boolean;
};

function withSkeleton<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  const ComponentWithSkeleton = ({
    isLoading,
    ...props
  }: P & WithSkeletonProps) => {
    if (isLoading) {
      return (
        <Card className="bg-zinc-800 dark:bg-zinc-100 relative min-h-[150px] p-6 animate-pulse space-y-4">
          <div className="h-4 w-1/3 bg-zinc-600 rounded" />
          <div className="h-6 w-1/2 bg-zinc-500 rounded" />
          <div className="absolute right-4 top-4 h-6 w-16 bg-zinc-600 rounded" />
          <div className="h-4 w-3/4 bg-zinc-600 rounded mt-6" />
          <div className="h-4 w-1/2 bg-zinc-700 rounded" />
        </Card>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return ComponentWithSkeleton;
}

export { withSkeleton };
