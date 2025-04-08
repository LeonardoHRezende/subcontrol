import { useRouter } from "next/navigation";
import { useToast } from "@/components/molecule/toast";

import { updateUserSession } from "@/lib/supabase/session";
import { login } from "@/lib/supabase/auth";

import getUser from "@/lib/api/services/users/getUser";
import { bffApi } from "@/lib/api";

import { APP_ROUTES } from "@/utils/app-routes";

export function useLogin() {
  const { toast } = useToast();
  const route = useRouter();

  const handleLogin = async (data: { email: string; password: string }) => {
    try {
      const { user } = await login(data);

      const userData = await getUser(bffApi, user.id);
      if (!userData) { 
        toast({
          type: "error",
          title: "Erro ao buscar dados do usuário",
          message: "Não foi possível encontrar os dados do usuário.",
        });
        return;
      }

      await updateUserSession({
        name: userData.fullName,
        companyId: userData.companyId,
        companyName: userData.companyName,
        role: userData.role,
      });

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
