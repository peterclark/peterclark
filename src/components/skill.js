import React, { Component } from "react"

class Skill extends Component {
  render() {
    const { skill } = this.props
    return (
      <div className="flexed-skills d-inline d-sm-flex">
        <div className="badge badge-warning">{skill.label}</div>
        {skill.items.map((item, index) => (
          <div className="badge badge-info" key={index}>
            {item}
          </div>
        ))}
      </div>
    )
  }
}

export default Skill
