/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        font_light: "#111827",
        font_dark: "#e5e7eb",
        bg_light: "#f3f4f6",
        bg_dark: "#111827",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
