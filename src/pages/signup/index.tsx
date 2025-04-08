import { Card, CardContent } from "@/components/atoms/card";
import { SignUpForm } from "@/modules/signup/components/form";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Card className="w-full max-w-md mx-auto border-zinc-200 dark:border-zinc-700">
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
