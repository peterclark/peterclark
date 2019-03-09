import React from "react"

import LayoutError from "../components/layoutError"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutError>
    <SEO title="404: Not found" />
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ "min-height": "100vh" }}
    >
      <h1 className="display-1 text-danger">404</h1>
    </div>
  </LayoutError>
)

export default NotFoundPage
