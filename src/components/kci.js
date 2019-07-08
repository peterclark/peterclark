import React from "react"
import { KciImage } from "./kciImage"

const Kci = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <KciImage />
          <strong>Kinetic Concepts</strong>
          <small>1997 - 1999</small>
        </div>
        <p className="position">
          <strong>Software Developer</strong>
        </p>
        <p>
          Designed and maintained embedded software for several product lines
          including the BariAir, RotoProne, Triadyne and KinAir therapy systems.
          Led the software design for a prototype touch screen based graphical
          interface built on PC/104 hardware running QNX, a UNIX based real-time
          operating system. Led all aspects of this project including marketing
          demonstrations, software architecture design, software development,
          and testing.
        </p>
      </article>
    </div>
  )
}

export default Kci
