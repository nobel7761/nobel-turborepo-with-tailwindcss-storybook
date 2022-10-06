/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "/packages/ui/Components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "/apps/docs/pages/**/*.{js,ts,jsx,tsx}",
    "/apps/web/pages/**/*.{js,ts,jsx,tsx}",
    "/packages/ui/Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}