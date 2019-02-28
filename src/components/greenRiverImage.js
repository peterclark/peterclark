import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GreenRiverImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "green-river-logo.png" }) {
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
export { GreenRiverImage }
