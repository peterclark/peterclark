import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SophosImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "sophos-logo.png" }) {
          childImageSharp {
            fixed(width: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export { SophosImage }
