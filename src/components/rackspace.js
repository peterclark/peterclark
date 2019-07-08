import React from "react"
import { RackspaceImage } from "./rackspaceImage"

const Rackspace = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <a
            href="https://www.rackspace.com"
            target="_blank"
            className="logo"
            rel="noopener noreferrer"
            data-tip="Rackspace"
          >
            <RackspaceImage />
          </a>
          <strong>Rackspace</strong>
          <small>2012 - 2017</small>
        </div>
        <p className="position">
          <strong>Senior Software Developer</strong>
        </p>
        <p>
          Part of an agile team designing Rackspace's internal sales quoting
          system using Ruby / Rails / MongoDB. Key contributor to all aspects of
          the application including the user interface (Bootstrap), restful API
          design and NoSQL database architecture. Author of two ruby gems that
          allow access to Rackspace's billing and inventory systems via XML and
          JSON API's.
        </p>
      </article>
    </div>
  )
}

export default Rackspace
