import React from "react"
import GreenRiver from "./greenRiver"
import Rackspace from "./rackspace"
import Usc from "./usc"
import Tetco from "./tetco"
// import Kci from "./kci"

const Work = () => {
  return (
    <section className="row">
      <div className="col-md-3 col-md-offset-1">
        <h2>Work</h2>
      </div>
      <div className="col-md-7">
        <Usc />
        <GreenRiver />
        <Rackspace />
        <Tetco />
      </div>
    </section>
  )
}

export default Work
