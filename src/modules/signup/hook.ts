import { signup } from "@/lib/supabase/auth";
import { useToast } from "@/components/molecule/toast";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/utils/app-routes";

export function useSignup() {
  const { toast } = useToast();
  const route = useRouter();

  const handleSignup = async (data: { email: string; password: string }) => {
    try {
      await signup(data);
      toast({
        type: "success",
        title: "Conta criada com sucesso",
        message: "Agora é só fazer o login com seu e-mail e senha.",
      });

      route.push(APP_ROUTES.login);
    } catch (error) {
      toast({
        type: "error",
        title: "Erro ao criar conta",
        message: (error as Error).message,
      });
    }
  };

  return { handleSignup };
}
