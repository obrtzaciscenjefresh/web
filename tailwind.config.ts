import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        raleway: ["var(--font-raleway)"],
        notoSerif: ["var(--font-noto-serif)"],
      },
    },
  },
  plugins: [],
};
export default config;
