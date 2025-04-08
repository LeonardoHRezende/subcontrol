import { ValidationRow } from "./components/validation-row";
import { validations } from "./constant";
type PasswordValidationProps = {
  password: string;
  confirmPassword: string;
};

function PasswordValidation({
  password,
  confirmPassword,
}: PasswordValidationProps) {
  const hasValue = password.length > 0 || confirmPassword.length > 0;

  return (
    <div className="space-y-1 mt-4">
      <p className="text-sm text-start text-zinc-600 dark:text-zinc-400">
        Sua senha precisa atender aos seguintes requisitos de segurança:
      </p>

      {validations.map((validation) => {
        const passed = validation.test(password);
        return (
          <ValidationRow
            key={validation.label}
            label={validation.label}
            status={hasValue ? (passed ? "success" : "error") : "neutral"}
          />
        );
      })}

      <ValidationRow
        label="Senhas devem coincidir"
        status={
          hasValue
            ? password && confirmPassword && password === confirmPassword
              ? "success"
              : "error"
            : "neutral"
        }
      />
    </div>
  );
}

export { PasswordValidation };
