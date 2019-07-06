import React from "react"
import Sophos from "./sophos"
import Consultant from "./consultant"
import Rackspace from "./rackspace"
import Tetco from "./tetco"

const Work = () => {
  return (
    <section className="row">
      <div className="col-md-3 col-md-offset-1">
        <h2>Work</h2>
      </div>
      <div className="col-md-7">
        <Sophos />
        <Consultant />
        <Rackspace />
        <Tetco />
      </div>
    </section>
  )
}

export default Work
