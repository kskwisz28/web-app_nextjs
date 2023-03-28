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
  white: {
    fontWeight: '700',
    fontSize: '16px',
    padding: '19.5px',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: 'blurple',
    lineHeight: '1',
    transition: transitions.base,

    ':hover': {
      background: 'blurple',
      color: 'white',
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
  },
}

export default links
