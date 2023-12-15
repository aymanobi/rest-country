/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      DarkBlue: 'hsl(209, 23%, 22%)',/* (Dark Mode Elements) */
      VeryDarkBlue: 'hsl(207, 26%,17%)',/* (Dark Mode Background) */

      VeryDarkBlue: 'hsl(200, 15%, 8%)',/* (Light Mode Text) */
      DarkGray: 'hsl(0, 0%, 52%)',/*  (Light Mode Input)*/
      VeryLightGray: 'hsl(0, 0%, 98%)',/*(Light Mode Background)  */

      White: 'hsl(0, 0%, 100%)'/* (Dark Mode Text & Light Mode Elements) */
    },
    extend: {}
  },
  plugins: [],
}
