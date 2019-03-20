import React from "react"
import { TetcoImage } from "./tetcoImage"

const Tetco = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <TetcoImage />
          <strong>Tetco</strong>
          <small>1999 - 2012</small>
        </div>
        <p>
          <strong>IT Director / Software Developer</strong>
        </p>
        <p>
          Designed key software applications used by customers and corporate
          employees using Java, JSP, MS SQL Server, HTML, CSS & JavaScript. Led
          company entry onto the web and developed cost saving applications that
          increased overall efficiency and enhanced collaboration between
          subsidiary companies. Directed all technology initiatives, including
          software development, network & communications infrastructure,
          security, PCI compliance, application deployment and retail
          technology. Directed a team of 19 IT professionals including seven
          direct reports.
        </p>
      </article>
    </div>
  )
}

export default Tetco
