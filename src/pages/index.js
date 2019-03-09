import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Skill from "../components/skills"
import Work from "../components/work"
import Github from "../components/github"
import Education from "../components/education"
import Awards from "../components/awards"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Resume"
      keywords={[
        `Peter Stephen Clark`,
        `web developer`,
        `react`,
        `rails`,
        `javascript`,
      ]}
    />
    <div className="container">
      <div id="resume">
        <Contact />
        <Skill />
        <Work />
        <Github />
        <Education />
        <Awards />
      </div>
    </div>
  </Layout>
)

export default IndexPage
