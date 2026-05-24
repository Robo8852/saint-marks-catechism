import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#6b1e1e",
          deep: "#4a1414",
          soft: "#8a3232",
        },
        gold: {
          DEFAULT: "#b8860b",
          bright: "#d4a017",
          pale: "#f5e9c4",
          dim: "#8a6a23",
        },
        parchment: {
          DEFAULT: "#fbf6e9",
          edge: "#f0e3c2",
          deep: "#e6d39a",
        },
        ink: "#2a1810",
      },
      fontFamily: {
        serif: [
          '"EB Garamond"',
          '"Cormorant Garamond"',
          "Garamond",
          '"Palatino Linotype"',
          "Georgia",
          "serif",
        ],
        display: [
          "Cinzel",
          '"Trajan Pro"',
          '"Cormorant Garamond"',
          "serif",
        ],
      },
      letterSpacing: {
        ornament: "0.4em",
        title: "0.06em",
        smallcaps: "0.15em",
      },
    },
  },
  plugins: [],
} satisfies Config;
