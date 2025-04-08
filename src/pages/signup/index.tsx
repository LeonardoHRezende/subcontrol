import Link from "next/link";
import { Button } from "@/components/atoms/button";
import { Card, CardContent } from "@/components/atoms/card";
import { Input } from "@/components/atoms/input";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Card className="w-full max-w-md mx-auto border-zinc-200 dark:border-zinc-700">
        <CardContent className="pt-10 pb-8 px-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
                Register
              </h1>
              <p className="text-xl text-zinc-700 dark:text-zinc-200">
                Create a new account
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
                <Input
                  placeholder="Company Name"
                  className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
                />
              </div>

              <Button
                className="w-full bg-zinc-500 hover:bg-zinc-600 text-zinc-50 py-6"
                size="lg"
              >
                Register
              </Button>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-zinc-700 dark:text-zinc-300">
                Already have an account?
              </p>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-40 border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
