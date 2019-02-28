import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const KciImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "kci-logo.png" }) {
          childImageSharp {
            fixed(width: 25) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export { KciImage }
