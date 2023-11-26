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
        'neon-gradient-from': '#7068F4',
        'neon-gradient-via': '#FF64B4',
        'neon-gradient-to': '#FFD94A',
      },
      boxShadow: {
        'neon': '0 0 6px rgba(255, 255, 255, 0.5)',
      },
      backgroundImage: {
        'neon-gradient': 'linear-gradient(to bottom, #7068F4, #FF64B4, #FFD94A)',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7068F4",
          "secondary": "#FF64B4",
          "accent": "#FFD94A",
          "neutral": "#d1d5db",
          "base-100": "#12181B",
          "info": "#38bdf8",
          "success": "#4ade80",
          "warning": "#facc15",
          "error": "#f43f5e",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
export default config;
