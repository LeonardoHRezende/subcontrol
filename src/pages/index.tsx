import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-abbey-50 dark:bg-abbey-950">
      <Card className="w-full max-w-md mx-auto border-abbey-200 dark:border-abbey-700">
        <CardContent className="pt-10 pb-8 px-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-abbey-950 dark:text-abbey-50">
                Welcome
              </h1>
              <p className="text-xl text-abbey-700 dark:text-abbey-200">
                Sign in to your account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-abbey-100 dark:bg-abbey-800 border-abbey-200 dark:border-abbey-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-abbey-100 dark:bg-abbey-800 border-abbey-200 dark:border-abbey-700"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-abbey-100 dark:bg-abbey-800 border-abbey-200 dark:border-abbey-700"
                />
              </div>

              <Button
                className="w-full bg-abbey-500 hover:bg-abbey-600 text-abbey-50 py-6"
                size="lg"
              >
                Sign In
              </Button>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-abbey-700 dark:text-abbey-300">
                Don't have an account?
              </p>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="w-40 border-abbey-300 dark:border-abbey-600 text-abbey-700 dark:text-abbey-200 hover:bg-abbey-200 dark:hover:bg-abbey-800"
                >
                  Register
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
