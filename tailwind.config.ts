import type { Config } from "tailwindcss";

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
      fontFamily: {
        helvetica: [`var(--font-helvetica)`],
        "birds-of-paradise": [`var(--font-birds-of-paradise)`],
        "bright-larch": [`var(--font-bright-larch)`],
        amarillo: [`var(--font-amarillo)`],
      },
    },
  },
  plugins: [],
} satisfies Config;
