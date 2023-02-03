import colors from './colors'

const heading = {
  display: `block`,
  color: `heading`,
  textDecoration: `none`,
  mb: 2,
}

const text = {
  default: {
    color: colors.text,
    fontSize: [2, null, null, 3],
  },
  introHeading: {
    fontSize: [4, 5, 6, 8],
    mb: 1,
  },
  introText: {
    fontSize: [2, 3, 4, 5],
    mb: 1,
  },
  introSub: {
    fontSize: [2, 3, 3, 4],
    mb: 1,
  },
  h1: {
    ...heading,
    fontSize: [4, 5, 6, 7],
    mt: 0,
    mb: 4,
  },
  h2: {
    ...heading,
    fontSize: [3, 4, 5, 6],
    mb: 3,
  },
  h3: {
    ...heading,
    fontSize: [3, 4, 4, 5],
    mb: 2,
  },
  h4: {
    ...heading,
    fontSize: [2, 3, 4, 4],
    mb: 2,
  },
  h5: {
    ...heading,
    fontSize: [2, 2, 2, 3],
    mb: 1,
  },
  h6: {
    ...heading,
    fontSize: [2],
    mb: 0,
  },
  p: {
    fontFamily: `body`,
    pb: 3,
  },
  lead: {
    fontWeight: '500',
    fontSize: '0.9rem',
  },
  medium: {
    fontSize: 3,
    mb: 3,
  },
  smaller: {
    fontSize: '0.8rem',
  },
  summaryLink: {
    fontSize: 14,
    color: '#989B9E',
    fontWeight: '600',
  },
  summaryLinkActive: {
    cursor: 'pointer',
    fontSize: 14,
    color: 'faded',
    fontWeight: '800',
  },
  breadcrumb: {
    color: 'grey2',
    fontSize: 16,
    fontWeight: '600',
  },
  bread: {
    color: 'faded',
    fontSize: 14,
    fontWeight: '400',
  },
  normal: {
    fontSize: 16,
  },
}

export default text
