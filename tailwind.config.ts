import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        heroBackground: "url(/hero-cover@2x.png)",
      },
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },
      backdropBlur: {
        searchBlur: "9.048371315002441px",
      },
      boxShadow: {
        chosenBox: "0px -5px 16.1px 0px #00000040",
      },
    },
  },
  plugins: [],
};
export default config;
