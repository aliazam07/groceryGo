/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/5': '20%',
        '4/5': '80%',
      },
    },
  },
  plugins: [],
}

