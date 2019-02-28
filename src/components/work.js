import React from "react"
import GreenRiver from "./greenRiver"
import Rackspace from "./rackspace"
import Usc from "./usc"
import Tetco from "./tetco"
import Kci from "./kci"

const Work = () => {
  return (
    <section className="row">
      <div className="col-sm-3 col-sm-offset-1">
        <h2>Work</h2>
      </div>
      <div className="col-sm-7">
        <GreenRiver />
        <Usc />
        <Rackspace />
        <Tetco />
        {/* <Kci /> */}
      </div>
    </section>
  )
}

export default Work
