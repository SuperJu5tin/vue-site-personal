/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    primary: colors.green.darken4,
    first: '#2c4c3b',
    second: '#306844',
    third: '#182c25',
    fourth: '#455b55',
    fifth: '#1e453e',
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.green.lighten1,
    first: '#c1e2be',
    second: '#cae9be',
    third: '#d6ebc3',
    fourth: '#ddf0c7',
    fifth: '#e6f8d1',
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark,
      light,
    },
  },
})
