/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'atk': '#C74728',
        'berxi-1': '#001f43',
        'berxi-2': '#4ccae7',
        'berxi-3': '#047db7',
        'logatot': '#EDC551',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
