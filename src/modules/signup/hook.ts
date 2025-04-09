import { useRouter } from "next/navigation";

import { signup } from "@/lib/supabase/auth";
import { updateUserSession } from "@/lib/supabase/session";
import { useToast } from "@/components/molecule/toast";

import { APP_ROUTES } from "@/utils/app-routes";

import createUser from "@/lib/api/services/users/createUser";
import { SignUpModel } from "./validation";
import { bffApi } from "@/lib/api";

export function useSignup() {
  const { toast } = useToast();
  const route = useRouter();

  const handleSignup = async (data: SignUpModel) => {
    try {
      const { user } = await signup(data);

      if (!user?.id) throw new Error("Usuário não encontrado!");

      const userData = await createUser(bffApi, {
        email: data.email,
        fullName: data.fullName,
        id: user.id,
      });

      await updateUserSession({
        name: userData.fullName
      });

      toast({
        type: "success",
        title: "Conta criada com sucesso",
        message: "Agora é só fazer o login com seu e-mail e senha.",
      });

      route.push(APP_ROUTES.signin);
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
