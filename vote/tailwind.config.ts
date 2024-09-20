import type { Config } from "tailwindcss";

const config: Config = {
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
        primaryBlack: "var(--primary-black)",
        primaryDark: "var(--primary-dark)",
        primary: "var(--primary)",
        primaryLight: "var(--primary-light)",
        primaryWhite: "var(--primary-white)",
      },
    },
  },
  plugins: [],
};
export default config;
