
import { Card, CardContent } from "@/components/atoms/card";
import { SignInForm } from "@/modules/signin/components/form";
import { Container } from "@/components/templates/container"

export default function LoginPage() {
  return (
    <Container>
      <Card className="w-full max-w-md mx-auto border-zinc-200 dark:border-zinc-700">
        <CardContent>
            <SignInForm/>
        </CardContent>
      </Card>
    </Container>
  );
}
