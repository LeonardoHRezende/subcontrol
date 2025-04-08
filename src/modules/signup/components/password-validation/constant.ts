export const validations = [
  {
    label: "Mínimo de 8 caracteres",
    test: (val: string) => val.length >= 8,
  },
  {
    label: "Pelo menos um número",
    test: (val: string) => /[0-9]/.test(val),
  },
  {
    label: "Pelo menos uma letra maiúscula",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    label: "Pelo menos um caractere especial",
    test: (val: string) => /[^A-Za-z0-9]/.test(val),
  },
];
