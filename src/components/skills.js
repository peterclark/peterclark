import React, { Component } from "react"
import Skill from "./skill"

class Skills extends Component {
  render() {
    const skills = [
      {
        label: "Languages",
        items: ["Ruby", "Javascript", "Java", "SQL"],
      },
      {
        label: "Databases",
        items: ["Postgres", "MongoDB", "Mysql", "Firebase"],
      },
      {
        label: "Web Frameworks",
        items: ["Ruby on Rails", "React", "Vue", "Express"],
      },
      {
        label: "UI Frameworks",
        items: ["Bootstrap", "Foundation", "Semantic UI"],
      },
      {
        label: "APIs",
        items: ["Facebook", "Twitter", "Twilio", "Salesforce", "Oracle"],
      },
      {
        label: "Web",
        items: ["HTML5", "CSS", "jQuery", "Node", "Yarn"],
      },
      {
        label: "Agile Tools",
        items: ["JIRA", "Pivotal Tracker", "Version One"],
      },
      {
        label: "Version Control",
        items: ["Git", "Github", "Bitbucket"],
      },
      {
        label: "Testing",
        items: ["Rspec", "Minitest"],
      },
    ]
    return (
      <section className="row skills">
        <div className="col-md-3 col-md-offset-1">
          <h2>Skills</h2>
        </div>
        <div className="col-md-7">
          <div className="row">
            <article className="col-sm-12">
              <h4>
                {skills.map((skill, index) => (
                  <Skill skill={skill} key={index} />
                ))}
              </h4>
            </article>
          </div>
        </div>
      </section>
    )
  }
}

export default Skills
