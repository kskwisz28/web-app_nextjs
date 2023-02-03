import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";

export default function Image() {
  const data = useStaticQuery(graphql`{
  placeholderImage: file(relativePath: {eq: "gatsby-astronaut.png"}) {
    childImageSharp {
      gatsbyImageData(width: 500, layout: CONSTRAINED)
    }
  }
}
`)

  return <GatsbyImage image={data.placeholderImage.childImageSharp.gatsbyImageData} />;
}
