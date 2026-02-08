/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'deep': '#0a0a0a',
        'surface': '#141414',
        'card': '#1a1a1a',
        'card-hover': '#242424',
        'border': '#333333',
        'accent': '#3b82f6',
        'accent-hover': '#2563eb',
        'success': '#22c55e',
      },
    },
  },
  plugins: [],
}
