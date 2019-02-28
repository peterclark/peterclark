import React from "react"
import { UscImage } from "./uscImage"

const Usc = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <p className="company">
          <UscImage />
          <strong>University of Southern California</strong>
          <small>2016 - present</small>
        </p>
        <p>
          <strong>Software Developer</strong>
        </p>
        <p>
          Lead developer for the USC Clinical Trials website redesign using Ruby
          / Rails / Postgres / ZURB Foundation. Building the workflow enabling
          researchers to create landing pages for their clinical trials with the
          intent to increase volunteer recruitment. Key accomplishments include
          integration of the Facebook/Instagram Ad API, Twilio API, address
          geocoding, language translation and elastisearch. Software development
          workflow using Git, Rspec, Github, Heroku and CodeClimate.
        </p>
      </article>
    </div>
  )
}

export default Usc
