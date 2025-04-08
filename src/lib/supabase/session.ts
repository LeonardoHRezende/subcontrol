"use server";

import { UserRoles } from "../api/interface";
import { createClient } from "./server";

export interface UserSessionMetadata {
  name: string;
  companyId: string;
  companyName: string;
  role: UserRoles;
}

export async function updateUserSession(metadata: UserSessionMetadata) {
  const supabase = await createClient();

  const { error } = await supabase.auth.updateUser({
    data: metadata,
  });

  if (error) {
    console.error("Erro ao atualizar a sessão do usuário:", error.message);
    throw new Error("Não foi possível atualizar a sessão do usuário.");
  }
}

export async function getUserSession() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("Erro ao recuperar a sessão:", error.message);
    return null;
  }

  return {
    id: data.user.id,
    email: data.user.email,
    metadata: data.user.user_metadata as UserSessionMetadata,
  };
}

export async function destroyUserSession() {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Erro ao deslogar:", error.message);
    throw new Error("Erro ao encerrar sessão.");
  }

  return { success: true };
}
