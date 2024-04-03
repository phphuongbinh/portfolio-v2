import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily : {
        mont: ['var(--font-mont)'],
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        primaryDark: '#58E6D9',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
      backgroundImage: {
        circularLight: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px , #f5f5f5 5px, #f5f5f5 100px )",
        circularDark: "repeating-radial-gradient(rgba(255,255,255 ,0.8) 2px , #222 5px, #222 100px )"
      }
    },
  },
  plugins: [],
  
};
export default config;
