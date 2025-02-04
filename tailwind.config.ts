import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-theme)",
        "neutral-3": "var(--color-ref-neutral3)",
        "neutral-2": "var(--color-ref-neutral2)",
        orange: "var(--color-ref-orange)",
        "orange-pressed": "var(--color-ref-orange2)",
      },
      fontSize: {
        xs: "0.12rem",
        sm: "0.14rem", // 14px ( 1rem = 100px)
        base: "0.16rem",
        lg: "0.18rem",
        xl: "0.2rem",
        "2xl": ".24rem",
        "5xl": "0.44rem",
      },
      spacing: Object.fromEntries(
        Array.from({ length: 201 }, (_, i) => [i, `${i * 0.01}rem`])
      ),
    },
  },
  plugins: [],
} satisfies Config;
