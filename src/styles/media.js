import { css } from '@emotion/react'

import theme from '../gatsby-plugin-theme-ui'

const toEm = size => size / 16 + 'em'

const mediaqueries = theme.media.reduce(
  (acc, [label, size], i) => ({
    ...acc,

    [label]: (...args) => css`
      @media (max-width: ${toEm(size)}) {
        ${css(...args)};
      }
    `,

    [`${label}_up`]: (...args) => css`
      @media (min-width: ${toEm(theme.media[i - 1][1] + 1)}) {
        ${css(...args)};
      }
    `,
  }),
  {}
)

export const media = mediaqueries
export default mediaqueries
