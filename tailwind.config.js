// tailwind.config.js
module.exports = {
  theme: {
        extend: {
         fontFamily: {
         'sans': ['-apple-system', 'BlinkMacSystemFont'],
         'serif': ['Georgia', 'Cambria'],
         'mono': ['SFMono-Regular', 'Menlo'],
         'display': ['Oswald'],
         'body': ['Open Sans'],
        },
        colors: {
          gray: {colors.gray,'900': '#2e2e2e'}
        }   
    }
  },
  variants: {},
  plugins: []
}
