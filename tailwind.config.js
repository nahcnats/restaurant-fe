/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#d1411e",
                accent: " #b7903c",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
