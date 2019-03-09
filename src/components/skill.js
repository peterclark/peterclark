import React, { Component } from "react"

class Skill extends Component {
  render() {
    const { skill } = this.props
    return (
      <div className="flexed-skills d-inline d-sm-flex">
        <div className="badge badge-warning">{skill.label}</div>
        {skill.items.map(item => (
          <div className="badge badge-info">{item}</div>
        ))}
      </div>
    )
  }
}

export default Skill
