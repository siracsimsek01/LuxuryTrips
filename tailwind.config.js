/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
      'header-top': "url('/header-top.png')",
      'header-bg': "url('/header-bg.png')",
      'header-fg': "url('/header-fg.png')",
      'header-bottom': "url('/header-bottom.png')",

      'header-top-mobile': "url('/header-top-mobile.png')",
      'header-bg-mobile': "url('/header-bg-mobile.png')",
      'header-fg-mobile': "url('/header-fg-mobile.png')",
      'header-bottom-mobile': "url('/header-bottom-mobile.png')",
     },
    },
  },
  plugins: [],
};
