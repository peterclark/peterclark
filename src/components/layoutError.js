import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"

const LayoutError = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteErrorTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="body container-fluid">
        <main>{children}</main>
      </div>
    )}
  />
)

LayoutError.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutError
