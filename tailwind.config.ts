import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : "#00bfff",
        'primary500': "#00bfff",
        'primary600': "#006abc",
        'secondary' : "#00bfff",
      },
    },
  },
  plugins: [],
} satisfies Config;
