"use client";

import { Avatar, AvatarFallback } from "@/components/atoms/avatar";
import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { logout } from "@/lib/supabase/auth";
import { useSession } from "@/lib/hooks/session";

export default function DashboardPage() {
  const { userName } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Card className="w-full max-w-4xl mx-auto border-zinc-200 dark:border-zinc-700">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-700 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">
            Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-zinc-600 dark:text-zinc-300">{userName}</span>
            <Avatar>
              <AvatarFallback className="bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200">
                {userName?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex items-start mb-8">
            <Button
              variant="outline"
              className="rounded-full px-6 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
              onClick={logout}
            >
              Sign Out
            </Button>
          </div>

          <Card className="border border-zinc-200 dark:border-zinc-700 rounded-md mb-6 bg-zinc-50 dark:bg-zinc-900">
            <CardContent className="flex items-center justify-center h-40">
              <p className="text-zinc-500 dark:text-zinc-300">
                No data available
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gasp-6">
            <Card className="border border-zinc-200 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900">
              <CardContent className="h-52"></CardContent>
            </Card>
            <Card className="border border-zinc-200 dark:border-zinc-700 rounded-md bg-zinc-50 dark:bg-zinc-900">
              <CardContent className="h-52"></CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
