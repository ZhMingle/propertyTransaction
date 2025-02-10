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
      screens: {
        p1430: "1430px", // 定义 p1430 媒体查询
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-theme)",
        neutral: "var(--color-ref-neutral)",
        "neutral-2": "var(--color-ref-neutral2)",
        "neutral-3": "var(--color-ref-neutral3)",
        "neutral-4": "var(--color-ref-neutral4)",
        "neutral-5": "var(--color-ref-neutral5)",
        orange: "var(--color-ref-orange)",
        "orange-pressed": "var(--color-ref-orange2)",
        "primary-pressed": "var(--color-theme-pressed)",
        font: "var(--font-primary-color)",
      },
      fontSize: {
        xs: "0.12rem",
        sm: "0.14rem", // 14px ( 1rem = 100px)
        base: "0.16rem",
        lg: "0.18rem",
        xl: "0.22rem",
        "2xl": "0.24rem",
        "3xl": ".28rem",
        "5xl": "0.44rem",
      },
      spacing: Object.fromEntries(
        Array.from({ length: 201 }, (_, i) => [i, `${i * 0.01}rem`])
      ),

      borderRadius: {
        sm: "0.04rem", // 默认 sm 值
      },
    },
  },
  plugins: [],
} satisfies Config;
