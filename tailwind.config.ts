import { subtle } from "crypto";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:"var(--font-inter)",
        roboto:"var(--font-roboto)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--secondary-foreground)",
        },
        placeholder: {
          DEFAULT: "var(--placeholder)",
        },
        background: {
          DEFAULT: "var(--background)",
          foreground: "var(--background-foreground)",
          oval: "var(--background-oval)",
          partners: "var(--background-partners)",
        },
        description: {
          DEFAULT: "var(--description)",
        },
        border: {
          DEFAULT: "var(--border)",
          subtle: "var(--border-subtle)",
          hover: "var(--border-hover)",
        },
 
      },
      boxShadow: {
        default: "var(--shadow)",
      },
      keyframes: {
        "zoom-in-out": {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        floating: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "zoom-in-out": "zoom-in-out 1s ease-in-out infinite",
        floating: "floating 2s ease-in-out infinite",
      },
      screens: {
        xxxlMax: {
          max: "1600.1px",
        },
        xxxlMin: {
          min: "1600.1px",
        },
        xxlMax: {
          max: "1366.1px",
        },
        xxlMin: {
          min: "1366.1px",
        },
        xlMax: {
          max: "1024.1px",
        },
        xlMin: {
          min: "1024.1px",
        },
        lgMax: {
          max: "991.1px",
        },
        lgMin: {
          min: "991.1px",
        },
        mdMax: {
          max: "768.1px",
        },
        mdMin: {
          min: "768.1px",
        },
        smMax: {
          max: "576.1px",
        },
        smMin: {
          min: "576.1px",
        },
        xsMax: {
          max: "375.1px",
        },
        xsMin: {
          max: "375.1px",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
