/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './composables/**/*.{js,vue,ts}',
    './composables/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      //สามารถจัดการส่วนนี้ใน theme ได้
    },
  },
  plugins: [],
}

