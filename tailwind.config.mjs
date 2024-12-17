/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5E376D",
        primaryLight: "#D3BBDD",
        secondary: "#DF2AB7",
        secondaryLight: "#ECE3F0",
      },
    },
  },
  plugins: [],
};
