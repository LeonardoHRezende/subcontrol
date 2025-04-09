"use client";

import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { logout } from "@/lib/supabase/auth";
import { Container } from "@/components/templates/container";
import { NavigationBar } from "@/components/molecule/app-nav";

export default function DashboardPage() {
  return (
    <Container>
      <div className="flex flex-col min-h-screen space-y-4 w-full">
        <NavigationBar />

        <Card className="w-full border-zinc-200 dark:border-zinc-700">
          <CardContent className="space-y-4">
            <div className=" dark:border-zinc-700 flex justify-between items-center">
              <h1 className="text-3xl font-bold text-zinc-950 dark:text-zinc-50">
                Dashboard
              </h1>
            </div>

            <div className="flex items-start mb-8 gap-3">
              <Button
                variant="outline"
                className="rounded-full px-6 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                onClick={logout}
              >
                Sign Out
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-6 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                onClick={logout}
              >
                Complete profile
              </Button>

              <Button
                variant="outline"
                className="rounded-full px-6 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                onClick={logout}
              >
                Add a subscription
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
