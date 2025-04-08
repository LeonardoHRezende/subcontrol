import { z } from "zod";
import { ValidationMessages } from "@/utils/validation-messages";

export const SigSignUpSchema = z
  .object({
    fullName: z.string().min(1, { message: ValidationMessages.required }),
    email: z
      .string()
      .min(1, { message: ValidationMessages.required })
      .email({ message: ValidationMessages.emailType }),
    password: z
      .string()
      .min(8, { message: ValidationMessages.passwordTooShort })
      .regex(/[A-Z]/, { message: ValidationMessages.passwordMissingUppercase })
      .regex(/[0-9]/, { message: ValidationMessages.passwordMissingNumber })
      .regex(/[^A-Za-z0-9]/, { message: ValidationMessages.passwordMissingSpecialChar }),
    confirmPassword: z
      .string()
      .min(1, { message: ValidationMessages.required }),
    companyName: z.string().min(1, { message: ValidationMessages.required }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: ValidationMessages.passwordDoesNotMatch,
  });

export type SignUpModel = z.infer<typeof SigSignUpSchema>;
