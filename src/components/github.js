import React from "react"

const Github = () => {
  return (
    <section className="row">
      <div className="col-sm-3 col-sm-offset-1">
        <h2>Github</h2>
      </div>
      <div className="col-sm-7">
        <div className="row">
          <article className="col-sm-12">
            <ul className="fa-ul">
              <li>
                <i className="fa fa-li fa-github fa-lg" />
                <strong>
                  <a href="https://github.com/peterclark/tinymodel">
                    TinyModel
                  </a>
                </strong>
              </li>
              <li>Tiny models for Meteor</li>
              <li>
                <img src="https://travis-ci.org/peterclark/tinymodel.svg?branch=master" />
                &nbsp;
                <img src="https://codeclimate.com/github/peterclark/tinymodel/badges/gpa.svg" />
              </li>
            </ul>
          </article>
        </div>
        <div className="row">
          <article className="col-sm-12">
            <ul className="fa-ul">
              <li>
                <i className="fa fa-li fa-github fa-lg" />
                <strong>
                  <a href="https://github.com/peterclark/redcap">REDCap</a>
                </strong>
              </li>
              <li>A Ruby gem for interacting with the REDCap API</li>
              <li>
                <img src="https://travis-ci.org/peterclark/redcap.svg?branch=master" />
                &nbsp;
                <img src="https://codeclimate.com/github/peterclark/redcap/badges/gpa.svg" />
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Github
