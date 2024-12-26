import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      theme: {
    extend: {
      keyframes: {
        slide: {
            "0%": { transform: "translateX(0%)" },
            "100%": { transform: "translateX(-300%)" }, // Replace with `(number of images - 1) * 100`
          },
          },
          animation: {
            slide: "slide 20s linear infinite",
          },
          textShadow: {
            'custom': '2px 2px 4px rgba(0, 0, 0, 0.7)', // Example custom shadow
          },
        },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
} satisfies Config;
