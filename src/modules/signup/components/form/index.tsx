import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "@/components/atoms/button";
import { InputHookForm } from "@/components/molecule/input";
import { PasswordHookFormInput } from "@/components/molecule/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigSignUpSchema } from "../../validation";
import { PasswordValidation } from "../password-validation";
import { useSignup } from "../../hook";

function SignUpForm() {
  const methods = useForm({
    resolver: zodResolver(SigSignUpSchema),
  });

  const { handleSignup } = useSignup();

  return (
    <div className="text-center space-y-4">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
          Cadastro
        </h1>
        <p className="text-xl text-zinc-700 dark:text-zinc-200">
          Crie uma nova conta
        </p>
      </div>

      <FormProvider {...methods}>
        <form
          className="space-y-4"
          onSubmit={methods.handleSubmit(handleSignup)}
        >
          <div className="space-y-4">
            <InputHookForm
              name="fullName"
              type="text"
              placeholder="Nome completo"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
            <InputHookForm
              name="email"
              type="email"
              placeholder="E-mail"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />

            <PasswordHookFormInput
              name="password"
              placeholder="Senha"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
            <PasswordHookFormInput
              name="confirmPassword"
              placeholder="Confirme sua senha"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
            <InputHookForm
              name="companyName"
              type="text"
              placeholder="Nome da empresa"
              className="bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700"
            />
          </div>

          <Button
            className="w-full bg-zinc-500 hover:bg-zinc-600 text-zinc-50 py-6"
            size="lg"
          >
            Cadastrar
          </Button>
        </form>
      </FormProvider>

      <PasswordValidation
        password={methods.watch("password")}
        confirmPassword={methods.watch("confirmPassword")}
      />

      <div className="space-y-2">
        <p className="text-zinc-700 dark:text-zinc-300">Já tem uma conta?</p>
        <Link href="/signin" className="hover:underline text-md">
          Faça o login
        </Link>
      </div>
    </div>
  );
}

export { SignUpForm };
