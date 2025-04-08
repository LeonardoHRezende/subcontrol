import { ValidationMessages } from "@/utils/validation-messages";
import { z } from "zod";

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: ValidationMessages.required })
    .email({ message: ValidationMessages.emailType }),
  password: z.string().min(1, { message: ValidationMessages.required })
});
