import React from "react"
import { ReactImage } from "./image.js"

const Footer = () => {
  return (
    <div className="row footer">
      <div className="col-sm">
        <div className="text-muted text-center">
          Made with
          <span style={{ padding: "0 .20rem" }}>
            <ReactImage />
          </span>
          on a
          <i className="fa fa-apple" style={{ padding: "0 .35rem" }} />
          in San Antonio
        </div>
      </div>
    </div>
  )
}

export default Footer
