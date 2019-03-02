import React from "react"

const Skills = () => {
  return (
    <section className="row skills">
      <div className="col-sm-3 col-sm-offset-1">
        <h2>Skills</h2>
      </div>
      <div className="col-sm-7">
        <div className="row">
          <article className="col-sm-12">
            <h4>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Languages</div>
                <div className="badge badge-info">Ruby</div>
                <div className="badge badge-info">Javascript</div>
                <div className="badge badge-info">Java</div>
                <div className="badge badge-info">SQL</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Databases</div>
                <div className="badge badge-info">Postgres</div>
                <div className="badge badge-info">MongoDB</div>
                <div className="badge badge-info">Mysql</div>
                <div className="badge badge-info">Firebase</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Web Frameworks</div>
                <div className="badge badge-info">Ruby on Rails</div>
                <div className="badge badge-info">React</div>
                <div className="badge badge-info">Vue</div>
                <div className="badge badge-info">Express</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">UI Frameworks</div>
                <div className="badge badge-info">Bootstrap</div>
                <div className="badge badge-info">Foundation</div>
                <div className="badge badge-info">Semantic UI</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">APIs</div>
                <div className="badge badge-info">Facebook</div>
                <div className="badge badge-info">Twitter</div>
                <div className="badge badge-info">Twilio</div>
                <div className="badge badge-info">Salesforce</div>
                <div className="badge badge-info">Oracle</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Web</div>
                <div className="badge badge-info">HTML5</div>
                <div className="badge badge-info">CSS</div>
                <div className="badge badge-info">jQuery</div>
                <div className="badge badge-info">Node</div>
                <div className="badge badge-info">Yarn</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Agile Tools</div>
                <div className="badge badge-info">JIRA</div>
                <div className="badge badge-info">Pivotal Tracker</div>
                <div className="badge badge-info">Version One</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Version Control</div>
                <div className="badge badge-info">Git</div>
                <div className="badge badge-info">Github</div>
                <div className="badge badge-info">Bitbucket</div>
              </div>
              <div className="flexed-skills d-inline d-sm-flex">
                <div className="badge badge-warning">Testing</div>
                <div className="badge badge-info">Rspec</div>
                <div className="badge badge-info">Minitest</div>
              </div>
            </h4>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Skills
