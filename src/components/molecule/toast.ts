"use client";

import { toast as sonnerToast } from "sonner";

interface IToast {
  type: "warning" | "error" | "success";
  title: string;
  message?: string;
}

function useToast() {
  const showToast = ({ type, title, message }: IToast) => {
    sonnerToast[type](title, {
      description: message,
    });
  };

  return { toast: showToast };
}

export { useToast };
