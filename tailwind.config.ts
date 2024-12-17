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
        galleryBackground: "url(/galleryBg.png)",
        canvasBackground: "url(/canvasBg.png)",
        canvas3 : "url(/canvas3.png)",
      },
      fontFamily: {
        rubik: ["rubik", "sans-serif"],
      },
      backdropBlur: {
        searchBlur: "9.048371315002441px",
      },
      boxShadow: {
        chosenBox: "0px -5px 16.1px 0px #00000040",
        galleryCombinedShadows: `
          -2px 2px 5px 0px #0000002B,
          -7px 7px 10px 0px #00000026,
          -17px 15px 13px 0px #00000017,
          -30px 27px 16px 0px #00000008,
          -46px 42px 17px 0px #00000000
        `,
      },
    },
  },
  plugins: [],
};
export default config;
