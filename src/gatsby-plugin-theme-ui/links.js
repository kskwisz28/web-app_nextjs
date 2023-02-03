import transitions from './transitions'

const links = {
  primary: {
    background: 'none',
    fontWeight: '700',
    outline: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: transitions.base,
    ':hover': {
      transition: transitions.base,
      transform: 'translateY(-2px)',
      opacity: 0.8,
    },
  },
}

export default links
