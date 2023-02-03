const primary = {
  bg: `contentBg`,
  borderRadius: `default`,
  transition: `
    transform 250ms ease,
    box-shadow 250ms ease,
    color 250ms ease
  `,
  boxShadow: `0 0 35px rgba(140,152,164,.125)`,
}

const interactive = {
  variant: 'cards.primary',
  '@media (hover: hover) and (pointer: fine)': {
    ':hover': {
      transform: `translateY(-0.25rem)`,
      borderRadius: `lg`,
    },
  },
}

const cards = { primary, interactive }

export default cards
