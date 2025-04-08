import { create } from "zustand";
import { getUserSession, UserSessionMetadata } from "@/lib/supabase/session";

type Session = {
  id: string;
  email: string | undefined;
  metadata: UserSessionMetadata;
} | null;

interface SessionStore {
  session: Session;
  isLoading: boolean;
  fetchSession: () => Promise<void>;
}

export const useSessionStore = create<SessionStore>((set, get) => ({
  session: null,
  isLoading: true,

  fetchSession: async () => {
    const { session } = get();

    if (session) return;

    set({ isLoading: true });

    try {
      const fetchedSession = await getUserSession();
      set({ session: fetchedSession, isLoading: false });
    } catch (error) {
      console.error("Erro ao buscar sessão:", error);
      set({ session: null, isLoading: false });
    }
  },
}));
