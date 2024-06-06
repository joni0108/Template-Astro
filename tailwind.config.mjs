/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                font_light: "#111827",
                font_dark: "#e5e7eb",
                bg_light: "#f3f4f6",
                bg_dark: "#111827",
                primary: "#2563eb",
                success: "#22c55e",
                error: "#ef4444",
            },
        },
    },
    plugins: [],
}
