/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f47b25",
        "brand-green": "#0e7547",
        "brand-light": "#f1f5f2",
        "accent-light": "#c1daae",
        "background-light": "#fcfcfc",
        "background-dark": "#121212",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "full": "9999px" },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
}
