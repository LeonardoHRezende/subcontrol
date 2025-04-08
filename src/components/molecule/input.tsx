import { memo } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Input } from "@/components/atoms/input";

type InputHookFormProps = React.ComponentProps<"input"> & {
  name: string;
};

export const InputHookForm = memo<InputHookFormProps>(
  function InputHookForm({
    name,
    ...inputProps
  }: InputHookFormProps) {
    const { control } = useFormContext();

    const {
      field: { onChange, value, onBlur },
      fieldState,
    } = useController({
      name,
      control,
      defaultValue: inputProps?.defaultValue ? inputProps?.defaultValue : '',
    });

    return (
      <Input
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        error={!!fieldState.error}
        helperText={fieldState?.error?.message}
        {...inputProps}
      />
    );
  }
);