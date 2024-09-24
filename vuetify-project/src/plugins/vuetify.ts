/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/styles/settings.scss'

// Composables
import { createVuetify, type ThemeDefinition } from 'vuetify'
import colors from 'vuetify/util/colors'

const dark: ThemeDefinition = {
  dark: true,
  colors: {
    background: colors.teal.darken4,
    lighter: colors.teal.darken3,
    lighterStill: colors.teal.darken2,
    primary: colors.teal.accent3,
    first: colors.cyan.darken4,
    second: colors.cyan.darken3,
    third: colors.cyan.accent4,
    fourth: colors.teal.darken1,
    fifth: colors.teal.accent4,
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
}

const light: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.teal.lighten4,
    lighter: colors.teal.lighten3,
    lighterStill: colors.teal.lighten2,
    primary: colors.teal.darken4,
    first: colors.cyan.lighten4,
    second: colors.cyan.lighten3,
    third: colors.cyan.accent3,
    fourth: colors.cyan.accent2,
    fifth: colors.lightBlue.lighten1,
    'about-me': colors.green.accent1,
    portfolio: colors.green.accent2,
    certifications: colors.green.accent3,
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      dark,
      light,
    },
  },
})
