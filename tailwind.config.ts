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
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '80%': { width: '100%' }, 
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'black' },
        },
        vibrate:{
          '0%':{top:"0%"},
          '50%':{top:"1%"},
          '100%':{top:"0%"}
        }
      },
      animation: {
        typing: 'typing 4s steps(20, end) infinite',
        blink: 'blink 0.5s step-end infinite',
        vibrate:'vibrate 0.8s linear infinite'
      },
    },
  },
  plugins: [],
} satisfies Config;
