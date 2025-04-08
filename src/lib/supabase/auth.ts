"use server";

import { createClient } from "@/lib/supabase/server";
import { destroyUserSession } from "./session";
import { APP_ROUTES } from "@/utils/app-routes";
import { redirect } from "next/navigation";

export async function login(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { data: userData, error } = await supabase.auth.signInWithPassword(
    data
  );

  if (error) {
    console.log("======erro ao autenticar======");
    console.log(error);
    if (error.status === 400 || error.message.includes("Invalid")) {
      throw new Error(
        "Credenciais inválidas. Se necessário solicite uma nova senha."
      );
    }

    throw new Error(
      "Não conseguimos relizar o login. Tente novamente ou contate nosso suporte."
    );
  }

  return { success: true, user: userData.user };
}

export async function signup(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { data: userData, error } = await supabase.auth.signUp(data);

  if (error) {
    console.log("======erro ao criar conta======");
    console.log(error);
    if (error.message.includes("already registered") || error.status === 400) {
      throw new Error(
        "Não foi possível criar uma conta com este e-mail. Caso já tenha uma conta faça o login."
      );
    }

    throw new Error(
      "Erro ao criar conta. Tente novamente ou contate nosso suporte."
    );
  }

  return { success: true, user: userData.user };
}

export async function logout() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (!error) {
    await destroyUserSession();
    redirect(APP_ROUTES.signin);
  }

  if (error) {
    console.log("======erro ao sair======");
    console.log(error);
    throw new Error("Erro ao sair. Tente novamente ou contate nosso suporte.");
  }

  return { success: true };
}
