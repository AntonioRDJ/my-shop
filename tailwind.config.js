const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.amber,
        terciary: colors.teal,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.red,
      }
    },
  },
  plugins: [],
}
