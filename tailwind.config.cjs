/**
 * tailwind.config.cjs
 * Place this file at the project root (same level as package.json).
 * Tailwind will scan files matched by the `content` globs to generate CSS.
 */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
    "./components/**/*.{html,js,ts,jsx,tsx,vue,svelte}",
    "./pages/**/*.{html,js,ts,jsx,tsx,vue,svelte}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "Segoe UI"],
      },
    },
  },
  plugins: [],
};