/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        "back-gray": "#f9f9f9",
        "button-blue": "#2281c2",
      },
    },
  },
  plugins: [],
};
