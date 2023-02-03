import merge from 'lodash/merge'

import borderWidths from './borderWidths'
import colors from './colors'
import tags from './tags'
import shadows from './shadows'
import transitions from './transitions'
import buttons from './buttons'
import text from './text'
import images from './images'
import links from './links'
import global from './global'
import cards from './cards'

const breakpoints = ['320px', '540px', '735px', '1070px', '1280px', '1440px']
const media = [
  ['phone_small', 320],
  ['phone', 376],
  ['phablet', 540],
  ['tablet', 735],
  ['desktop', 1070],
  ['desktop_medium', 1280],
  ['desktop_large', 1440],
]

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

const fontSizes = [12, 14, 16, 18, 24, 32, 48, 64, 72]

const borderStyles = {
  thick: 'solid',
}

const radii = {
  none: 0,
  sm: `0.125rem`,
  default: `0.5rem`,
  lg: `1rem`,
  xl: `2rem`,
  xxl: `4rem`,
  full: 9999,
  right: `0 1rem 1rem 0`,
  left: `1rem 0 0 1rem`,
  top: `1rem 1rem 0 0`,
  bottom: `0 0 1rem 1rem`,
  small: 4,
  normal: 8,
  large: 16,
}

const fontWeights = {
  body: '400',
  heading: '700',
  bold: '700',
}

const fonts = {
  body: "roboto, sans-serif",
  heading: "futura-pt-bold, sans-serif",
  serif: "futura-pt-bold, sans-serif",
  sansSerif: "futura-pt-bold, sans-serif",
  monospace: `"Operator Mono", Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
}

const lineHeights = {
  body: '1.5',
  heading: '1.125',
}

const sizes = {
  container: '1200px',
  containerSmall: '960px',
  read: '680px',
}

const box = {
  primary: {
    padding: 4,
  },
  rounded1: {
    borderRadius: '8px',
  },
  label: {
    py: 1,
  },
  intro: {
    py: [3, null, 3, 4, 5],
  },
  card: {
    boxShadow: shadows.medium,
  },
}

const styles = {
  root: {
    WebkitFontSmoothing: `antialiased`,
    textDecoration: `none`,
    overflowX: `hidden`,
    fontFamily: 'body',
    fontWeight: 'body',
  },
  li: {
    py: 2,
  },
  ...text,
}

const letterSpacings = {
  body: 'normal',
  caps: '0.2em',
}

export default merge({
  initialColorMode: 'light',
  useCustomProperties: true,
  borderWidths,
  box,
  colors,
  buttons,
  links,
  fonts,
  lineHeights,
  fontWeights,
  fontSizes,
  images,
  text,
  sizes,
  breakpoints,
  media,
  tags,
  shadows,
  transitions,
  styles,
  space,
  letterSpacings,
  radii,
  borderStyles,
  global,
  cards,
})
