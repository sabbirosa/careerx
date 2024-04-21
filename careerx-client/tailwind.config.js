/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#1554a5",
                secondary: "#3f90ce",
                accent: "#04286f"
        }}
    },
    plugins: [],
};
