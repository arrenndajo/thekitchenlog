/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBFAF7",
        paper2: "#F1EDE4",
        polaroid: "#FFFDF8",
        ink: "#1A1714",
        inkSoft: "#6B645C",
        inkFaint: "#A39B90",
        line: "#E5E0D6",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        hand: ['"Caveat"', "cursive"],
        mono: ['"Spline Sans Mono"', "monospace"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card:
          "0 1px 2px rgba(26,23,20,0.12), 0 12px 26px -10px rgba(26,23,20,0.55)",
        "card-hover":
          "0 4px 8px rgba(26,23,20,0.14), 0 26px 42px -14px rgba(26,23,20,0.6)",
        "card-lg":
          "0 40px 90px -30px rgba(26,23,20,0.6), 0 3px 6px rgba(26,23,20,0.12)",
        nav: "0 1px 0 rgba(26,23,20,0.06)",
      },
    },
  },
  plugins: [],
};