import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TetcoImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "tetco-logo.png" }) {
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
export { TetcoImage }
