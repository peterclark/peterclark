import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const InrevImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "inrev-logo.png" }) {
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
export { InrevImage }
