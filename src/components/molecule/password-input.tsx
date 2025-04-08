import { memo, useState } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/atoms/input";

type PasswordInputProps = React.ComponentProps<"input"> & {
  name: string;
};

function PasswordInput({ name, ...props }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  const { control } = useFormContext();

  const {
    field: { onChange, value, onBlur },
    fieldState,
  } = useController({
    name,
    control,
    defaultValue: props?.defaultValue ? props?.defaultValue : "",
  });

  return (
    <Input
      type={visible ? "text" : "password"}
      onChange={onChange}
      value={value}
      onBlur={onBlur}
      error={!!fieldState.error}
      helperText={fieldState?.error?.message}
      rightSlot={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {visible ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      }
      {...props}
    />
  );
}

export const PasswordHookFormInput = memo(PasswordInput);
