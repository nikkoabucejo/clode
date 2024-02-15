import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./core/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        base: "640px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1280px",
      },
      borderRadius: {
        base: "8px",
      },
      fontSize: {
        headliner: "32px",
      },
    },
  },
  plugins: [nextui()],
};

export default config;
