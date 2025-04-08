import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-abbey-50 dark:bg-abbey-950">

      <Card className="w-full max-w-4xl mx-auto border-abbey-200 dark:border-abbey-700">
        <div className="p-6 border-b border-abbey-200 dark:border-abbey-700 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-abbey-950 dark:text-abbey-50">
            Dashboard
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-abbey-600 dark:text-abbey-300">Admin</span>
            <Avatar>
              <AvatarFallback className="bg-abbey-200 dark:bg-abbey-700 text-abbey-700 dark:text-abbey-200">
                A
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold text-abbey-950 dark:text-abbey-50">
                Company Name
              </h2>
              <p className="text-abbey-600 dark:text-abbey-300">
                admin@example.com
              </p>
            </div>
            <Button
              variant="outline"
              className="rounded-full px-6 border-abbey-300 dark:border-abbey-600 text-abbey-700 dark:text-abbey-200 hover:bg-abbey-200 dark:hover:bg-abbey-800"
            >
              Sign Out
            </Button>
          </div>

          <Card className="border border-abbey-200 dark:border-abbey-700 rounded-md mb-6 bg-abbey-50 dark:bg-abbey-900">
            <CardContent className="flex items-center justify-center h-40">
              <p className="text-abbey-500 dark:text-abbey-300">
                No data available
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-6">
            <Card className="border border-abbey-200 dark:border-abbey-700 rounded-md bg-abbey-50 dark:bg-abbey-900">
              <CardContent className="h-52"></CardContent>
            </Card>
            <Card className="border border-abbey-200 dark:border-abbey-700 rounded-md bg-abbey-50 dark:bg-abbey-900">
              <CardContent className="h-52"></CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
