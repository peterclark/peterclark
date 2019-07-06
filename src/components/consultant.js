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
            <a
              href="https://www.usaa.com"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="USAA"
            >
              <UsaaImage />
            </a>
          </div>
          <div className="mx-1 boston">
            <a
              href="https://www.boston.gov"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="City of Boston"
            >
              <BostonImage />
            </a>
          </div>
          <div className="mx-1 rackspace">
            <a
              href="https://www.rackspace.com"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="Rackspace"
            >
              <RackspaceImage />
            </a>
          </div>
          <div className="mx-1 inrev">
            <a
              href="https://www.inrev.org"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="INREV"
            >
              <InrevImage />
            </a>
          </div>
          <div className="mx-1 storymd">
            <a
              href="https://phr.storymd.com"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="StoryMD"
            >
              <StoryMdImage />
            </a>
          </div>
          <div className="mx-1 usc">
            <a
              href="https://www.usc.edu"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="University of Southern California"
            >
              <UscImage />
            </a>
          </div>
          <div className="mx-1 starbucks">
            <a
              href="https://www.starbucks.com"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="Starbucks"
            >
              <StarbucksImage />
            </a>
          </div>
          <div className="mx-1 greenriver">
            <a
              href="https://www.greenriver.com"
              target="_blank"
              className="logo"
              rel="noopener noreferrer"
              data-tip="Green River"
            >
              <GreenRiverImage />
            </a>
          </div>
          <strong
            className="d-none d-sm-inline"
            style={{ marginLeft: "-126px" }}
          >
            Freelance
          </strong>
          <strong className="d-sm-none" style={{ padding: "0 1rem 0 0" }}>
            Freelance
          </strong>
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
