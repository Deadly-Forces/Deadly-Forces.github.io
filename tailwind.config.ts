import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0B0E",
        foreground: "#F5EFEB",
        studio: {
          bg: "#0A0B0E",
          panel: "#111318",
          card: "#181A22",
          elevated: "#20232D",
          border: "rgba(245, 239, 235, 0.08)",
          copper: "#E58C36",
          bronze: "#B45309",
          amber: "#D97706",
          bone: "#F5EFEB",
          muted: "#A8A29E",
        },
        space: {
          black: "#0A0B0E",
          cream: "#F5EFEB",
          orange: "#E58C36",
          rust: "#B45309",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
