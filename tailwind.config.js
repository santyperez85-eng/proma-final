/** @type {import('tailwindcss').Config} */

// pro.ma Color System v1.1 — Umbral
// Wordmark: proma (sin punto)
// La m en Playfair Display Italic es el umbral tipográfico
// El punto vive en el sistema de unidades (pro.pack, pro.brand, etc.)

module.exports = {
  content: ["./**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primitivos
        navy: {
          900: "#1C2340",
          700: "#2E3A5C",
        },
        terra: {
          500: "#D4521A",
          700: "#B5420F",
        },
        cream: {
          50:  "#FAF8F4",
          100: "#F2EDE4",
          200: "#EAE6DE",
        },
        // Semánticos modo oscuro
        "proma-bg-dark":      "#1C2340",
        "proma-surface-dark": "#2E3A5C",
        // Semánticos modo claro
        "proma-bg-light":      "#FAF8F4",
        "proma-surface-light": "#EAE6DE",
        // Acento universal — punto del sistema de unidades
        "proma-accent":       "#D4521A",
        "proma-accent-hover": "#B5420F",
        // Texto
        "proma-text-on-dark":  "#F2EDE4",
        "proma-text-on-light": "#2C2420",
      },
      fontFamily: {
        // Wordmark — uso exclusivo
        wordmark:        ["'Grantha Sangam MN'", "Georgia", "serif"],
        "wordmark-serif": ["'Playfair Display'", "Georgia", "serif"], // solo la m en italic

        // Sistema
        primary: ["'Plus Jakarta Sans'", "sans-serif"],
        mono:    ["'IBM Plex Mono'", "monospace"],
      },
      fontSize: {
        "t1":       ["36px", { lineHeight: "1.15", letterSpacing: "-0.04em", fontWeight: "700" }],
        "t2":       ["28px", { lineHeight: "1.2",  letterSpacing: "-0.02em", fontWeight: "600" }],
        "t3":       ["22px", { lineHeight: "1.3",  letterSpacing: "0",       fontWeight: "600" }],
        "t4":       ["18px", { lineHeight: "1.4",  letterSpacing: "0",       fontWeight: "500" }],
        "body":     ["14px", { lineHeight: "1.6",  letterSpacing: "0",       fontWeight: "400" }],
        "small":    ["12px", { lineHeight: "1.5",  letterSpacing: "0",       fontWeight: "400" }],
        "label-ui": ["11px", { lineHeight: "1",    letterSpacing: "0.08em",  fontWeight: "500" }],
        "mono-lg":  ["15px", { lineHeight: "1.4",  letterSpacing: "0.06em",  fontWeight: "400" }],
        "mono-md":  ["12px", { lineHeight: "1.4",  letterSpacing: "0.04em",  fontWeight: "400" }],
        "mono-sm":  ["11px", { lineHeight: "1.4",  letterSpacing: "0.02em",  fontWeight: "400" }],
      },
      spacing: {
        "1": "4px", "2": "8px", "3": "12px", "4": "16px",
        "5": "20px", "6": "24px", "8": "32px", "10": "40px",
        "12": "48px", "16": "64px", "20": "80px", "24": "96px",
      },
      borderRadius: {
        sm:   "3px",
        md:   "6px",
        lg:   "12px",
        pill: "999px",
      },
      borderWidth: {
        accent: "4px",
      },
    },
  },
  plugins: [],
};
