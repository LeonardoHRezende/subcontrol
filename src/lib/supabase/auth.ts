"use server";

import { createClient } from "@/lib/supabase/server";

export async function login(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    if (error.status === 400 || error.message.includes("Invalid")) {
      throw new Error("Credenciais inválidas. Se necessário solicite uma nova senha.");
    }

    throw new Error("Não conseguimos relizar o login. Tente novamente ou contate nosso suporte.");
  }

  return { success: true };
}

export async function signup(data: { email: string; password: string }) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    if (error.message.includes("already registered") || error.status === 400) {
      throw new Error("Não foi possível criar uma conta com este e-mail. Caso já tenha uma conta faça o login.");
    }

    throw new Error("Erro ao criar conta. Tente novamente ou contate nosso suporte.");
  }

  return { success: true };
}
