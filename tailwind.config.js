module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
      mono: ['Cutive Mono', 'ui-monospace', 'monospace']
    }
  },
  variants: {
    extend: {
      transform: ['hover']
    },
  },
  plugins: [
    // require('@tailwindcss/typography')
  ],
}
