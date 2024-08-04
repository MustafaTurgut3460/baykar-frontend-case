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
        primary: "#78350F",
      },
      backgroundColor: {
        primary: "#78350F",
        dark: "#0F172A",
      },
      borderColor: {
        primary: "#78350F",
      },
      boxShadow: {
        "custom-combined":
          "0px 0px 15px 0px #FFFFFF12, 0px 25px 50px -12px #FFFFFF40",
        "video-card":
          "0px 20px 25px -5px #0000001A, 0px 0px 10px 0px #00000012",
        "image-item": "0px 0px 4px 0px #00000012, 0px 4px 6px -1px #0000001A",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
