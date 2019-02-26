import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Contact from "../components/contact"
import Skill from "../components/skills"
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Resume"
      keywords={[`Peter Stephen Clark`, `web developer`, `react`]}
    />
    <div className="container">
      <div id="resume">
        <Contact />
        <Skill />
      </div>
    </div>
  </Layout>
)

export default IndexPage
