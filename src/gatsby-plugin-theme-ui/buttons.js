import transitions from './transitions'
import colors from './colors'
import shadows from './shadows'

const buttons = {
  primary: {
    background: colors.primary,
    borderRadius: "11.1526px",
    border: `2px solid`,
    borderColor: colors.primary,
    color: colors.white,
    outline: 'none',
    py: "12px",
    cursor: 'pointer',
    fontFamily: 'body'
  },
  secondary: {
    background: colors.raspberry,
    border: `none`,
    color: colors.white,
    borderRadius: "11.1526px",
    py: "12px",
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-1px)',
      background: colors.green,
      borderColor: colors.green,
    },
    fontFamily: 'body'
  },
  cta: {
    background: colors.primary,
    fontWeight: '700',
    outline: 'none',
    border: 'none',
    borderRadius: "11.1526px",
    borderColor: 'primary',
    px: 4,
    py: 3,
    cursor: 'pointer',
    transition: transitions.base,
    boxShadow: shadows.shadowButton,
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      borderColor: 'green',
      background: colors.green,
    },
    fontFamily: 'body'
  },
  baseTransparent: {
    background: 'transparent',
    fontWeight: '500',
    outline: 'none',
    color: 'base',
    borderRadius: "11.1526px",
    border: 'none',
    borderColor: 'base',
    px: 3,
    py: 2,
    cursor: 'pointer',
    transition: transitions.base,
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      borderColor: 'base',
      color: '#ffffff',
      background: colors.base,
    },
    fontFamily: 'body'
  },
  kiwi: {
    background: colors.kiwi,
    fontWeight: '700',
    outline: 'none',
    fontSize: '16px',
    border: '2px solid',
    borderColor: 'kiwi',
    borderRadius: "11.1526px",
    px: 4,
    py: 3,
    cursor: 'pointer',
    transition: transitions.base,
    boxShadow: shadows.shadowButton,
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      borderColor: 'green',
      background: colors.green,
    },
    fontFamily: 'body'
  },
  link: {
    background: 'none',
    color: 'primary',
    fontWeight: '700',
    borderRadius: "11.1526px",
    outline: 'none',
    cursor: 'pointer',
    transition: transitions.base,
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      opacity: 0.8,
    },
    fontFamily: 'body'
  },
  linkWithBorder: {
    background: 'none',
    fontWeight: '700',
    borderRadius: "11.1526px",
    outline: 'none',
    border: '2px solid',
    px: 4,
    py: 3,
    cursor: 'pointer',
    transition: transitions.base,
    fontFamily: 'body',
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      opacity: 0.8,
    },
  },
  outlineWhite: {
    background: 'none',
    border: '1px solid',
    py: "12px",
    borderRadius: "11.1526px",
    borderColor: colors.white,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlineBlack: {
    background: 'none',
    borderRadius: "11.1526px",
    py: "12px",
    border: '1px solid',
    borderColor: colors.text,
    color: colors.black,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlinePrimary: {
    background: 'transparent',
    py: "12px",
    borderRadius: "11.1526px",
    border: '2px solid',
    borderColor: colors.primary,
    color: colors.primary,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlineSecond: {
    background: 'transparent',
    py: "12px",
    borderRadius: "11.1526px",
    border: '2px solid',
    borderColor: colors.primary,
    color: colors.primary,
    cursor: 'pointer',
    fontFamily: 'body'
  },

  naMedium: {
    fontFamily: 'inherit',
    background: 'transparent',
    padding: '16px 24px',
    color: 'black',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '24px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  naExtraSmall: {
    fontFamily: 'initial',
    background: 'transparent',
    padding: '13.5px 14px 13.5px 13px',
    color: 'black',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '1',
    cursor: 'pointer',
    borderRadius: '5px',

    svg: {
      fill: 'black',
    },

    ':hover': {
      background: 'blurple',
      color: 'egg',

      svg: {
        fill: 'egg',
      }
    },
  },
  blue: {
    fontWeight: '700',
    fontSize: '16px',
    padding: '19.5px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blurple',
    color: 'white',
    lineHeight: '1',
    transition: transitions.base,
    cursor: 'pointer',
  },
  blueMedium: {
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
    padding: '18px 24px',
    borderRadius: '5px',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blurple',
    color: 'egg',
    transition: transitions.base,
    cursor: 'pointer',
  }
}

export default buttons
