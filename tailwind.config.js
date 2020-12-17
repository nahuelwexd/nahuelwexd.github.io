module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
		extend: {},
		fontFamily: {
			title: ['Montserrat', 'sans-serif'],
			subtitle: ['Raleway', 'sans-serif'],
			sans: ['Source\\ Sans\\ Pro', 'sans-serif'],
		}
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
