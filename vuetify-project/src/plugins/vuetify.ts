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
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    primary: colors.green.lighten4,
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      dark,
      light,
    },
  },
})
