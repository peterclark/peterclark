import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const UsaaImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "usaa-logo.png" }) {
          childImageSharp {
            fixed(height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.placeholderImage.childImageSharp.fixed} />}
  />
)
export { UsaaImage }
