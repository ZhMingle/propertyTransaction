/** @type {import('tailwindcss').Config} */
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
};
