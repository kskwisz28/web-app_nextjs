import transitions from './transitions'
import colors from './colors'
import shadows from './shadows'

const buttons = {
  primary: {
    background: colors.primary,
    borderRadius: "2px",
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
    borderRadius: "2px",
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
    py: '12px',
    border: 'none',
    borderRadius: "2px",
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
    borderRadius: "2px",
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
    borderRadius: "2px",
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
    borderRadius: "2px",
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
    borderRadius: "2px",
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
    borderRadius: "2px",
    borderColor: colors.white,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlineBlack: {
    background: 'none',
    borderRadius: "2px",
    py: "12px",
    border: '1px solid',
    borderColor: colors.text,
    color: colors.black,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlinePrimary: {
    background: 'transparent',
    borderRadius: 0,
    py: "12px",
    borderRadius: "2px",
    border: '2px solid',
    borderColor: colors.primary,
    color: colors.primary,
    cursor: 'pointer',
    fontFamily: 'body'
  },
  outlineSecond: {
    background: 'transparent',
    borderRadius: 0,
    py: "12px",
    borderRadius: "2px",
    border: '2px solid',
    borderColor: colors.primary,
    color: colors.primary,
    cursor: 'pointer',
    fontFamily: 'body'
  },
}

export default buttons
