import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-border": {
          "0%, 100%": {
            "box-shadow": "0 0 0 0 hsl(var(--primary) / 0)",
          },
          "50%": {
            "box-shadow": "0 0 0 2px hsl(var(--primary) / 0.4)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        "slide-in": {
          from: { transform: "translateX(-8px)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-border": "pulse-border 1.5s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "slide-in": "slide-in 0.2s ease-out",
      },
    },
  },
  plugins: [animate, typography],
} satisfies Config;
