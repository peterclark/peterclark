import React from "react"
import { GreenRiverImage } from "./greenRiverImage"

const GreenRiver = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <GreenRiverImage />
          <strong>Green River</strong>
          <small>2017 - 2019</small>
        </div>
        <p>
          <strong>Lead Software Developer</strong>
        </p>
        <p>
          Rails developer for a variety of clients that include Starbucks, The
          City of Boston,{" "}
          <strong>
            <a
              href="https://asset-data.inrev.org/users/auth/inrev"
              target="_blank"
            >
              Inrev
            </a>
          </strong>
          , a European association for real estate investors, and{" "}
          <strong>
            <a href="https://phr.storymd.com" target="_blank">
              StoryMD
            </a>
          </strong>
          , a social network startup focused on patient health. Projects were
          built using Rails 5, Postgres, Slim, Sidekiq, jQuery, Coffeescript,
          Devise, CanCan, Kaminari, SimpleForm, Dropzone, and Carrierwave.
          Particularly adept at UX/UI design favoring clean and simple user
          interfaces. Proficient in the blending of structure (HTML markup),
          design (CSS) and behavior (Javascript) in web applications.
        </p>
      </article>
    </div>
  )
}

export default GreenRiver
