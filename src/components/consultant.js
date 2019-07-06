import React from "react"
import { GreenRiverImage } from "./greenRiverImage"
import { UsaaImage } from "./usaaImage"
import { RackspaceImage } from "./rackspaceImage"
import { UscImage } from "./uscImage"
import { StarbucksImage } from "./starbucksImage"
import { BostonImage } from "./bostonImage"
import { InrevImage } from "./inrevImage"
import { StoryMdImage } from "./storymdImage"

const Consultant = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <div className="mr-1">
            <UsaaImage />
          </div>
          <div className="mx-1 boston">
            <BostonImage />
          </div>
          <div className="mx-1 rackspace">
            <RackspaceImage />
          </div>
          <div className="mx-1 inrev">
            <InrevImage />
          </div>
          <div className="mx-1 storymd">
            <StoryMdImage />
          </div>
          <div className="mx-1 usc">
            <UscImage />
          </div>
          <div className="mx-1 starbucks">
            <StarbucksImage />
          </div>
          <div className="mx-1 greenriver">
            <GreenRiverImage />
          </div>
          <strong style={{ marginLeft: "-126px" }}>Freelance</strong>
          <small>2016 - 2019</small>
        </div>
        <p>
          <strong>Software Consultant</strong>
        </p>
        <p>
          Lead web developer for a variety of clients that include{" "}
          <strong>
            <a
              href="https://www.usaa.com/join/start"
              target="_blank"
              rel="noopener noreferrer"
            >
              USAA
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://www.greenriver.com/portfolio/starbucks"
              target="_blank"
              rel="noopener noreferrer"
            >
              Starbucks
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://www.greenriver.com/portfolio/the-city-of-boston"
              target="_blank"
              rel="noopener noreferrer"
            >
              The City of Boston
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://clinicaltrials.keckmedicine.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              USC
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://www.rackspace.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rackspace
            </a>
          </strong>
          ,{" "}
          <strong>
            <a
              href="https://asset-data.inrev.org/users/auth/inrev"
              target="_blank"
              rel="noopener noreferrer"
            >
              Inrev
            </a>
          </strong>
          , and{" "}
          <strong>
            <a
              href="https://phr.storymd.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              StoryMD
            </a>
          </strong>
          {". "}
          Projects were built using Rails 5, React, Java, Ruby, Javascript,
          Postgres, Mysql, Elasticsearch, Heroku and AWS. Particularly adept at
          UX/UI design favoring clean and simple user interfaces. Proficient in
          the blending of structure (HTML markup), design (CSS) and behavior
          (Javascript) in web applications.
        </p>
      </article>
    </div>
  )
}

export default Consultant
