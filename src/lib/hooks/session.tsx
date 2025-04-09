"use client";

import { useSessionStore } from "@/lib/store/user-session";
import { useEffect } from "react";

export function useSession() {
  useEffect(() => {
    const { fetchSession } = useSessionStore.getState();
    fetchSession();
  }, []);

  const session = useSessionStore((state) => state.session);

  console.log(session)
  return {
    userName: session?.metadata.name,
    userEmail: session?.email,
    isLoading: useSessionStore((state) => state.isLoading)
  };
}
