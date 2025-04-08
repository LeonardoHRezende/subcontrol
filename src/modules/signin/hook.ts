import { login } from "@/lib/supabase/auth";
import { useToast } from "@/components/molecule/toast";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/utils/app-routes";

export function useLogin() {
  const { toast } = useToast();
  const route = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      await login(data);
      toast({
        type: "success",
        title: "Login realizado com sucesso",
      });

      route.push(APP_ROUTES.dashboard);
    } catch (error) {
      toast({
        type: "error",
        title: "Erro ao fazer login",
        message: (error as Error).message,
      });
    }
  };

  return { handleLogin };
}
