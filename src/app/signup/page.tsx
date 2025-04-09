import { Card, CardContent } from "@/components/atoms/card";
import { Container } from "@/components/templates/container";
import { SignUpForm } from "@/modules/signup/components/form";

export default function RegisterPage() {
  return (
    <Container>
      <Card className="w-full max-w-md mx-auto border-zinc-200 dark:border-zinc-700">
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </Container>
  );
}
