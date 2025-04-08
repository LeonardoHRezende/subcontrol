// tailwind.config.ts
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        abbey: {
          50: "#f4f5f7",
          100: "#e4e8e9",
          200: "#ccd2d5",
          300: "#a8b3b8",
          400: "#7d8b93",
          500: "#627078",
          600: "#545f66",
          700: "#485056",
          800: "#40464a",
          900: "#383c41",
          950: "#232629",
        },
      },
      borderRadius: {
        lg: "0.625rem",
        xl: "1rem",
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;
