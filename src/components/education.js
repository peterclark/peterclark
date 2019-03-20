import React from "react"

const Education = () => {
  return (
    <section className="row">
      <div className="col-md-3 col-md-offset-1">
        <h2>Education</h2>
      </div>
      <div className="col-md-7">
        <div className="row">
          <article className="col-sm-12">
            <ul className="fa-ul">
              <li>
                <i className="fa fa-li fa-university" />
                <strong>
                  <a
                    href="http://www.tlu.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Texas Lutheran University
                  </a>
                </strong>
              </li>
              <li>Physics</li>
              <li>
                <div className="badge badge-secondary">3.8 GPA</div>
                &nbsp;
                <div className="badge badge-info">Magna Cum Laude</div>
              </li>
            </ul>
            <ul className="fa-ul">
              <li>
                <i className="fa fa-li fa-university" />
                <strong>
                  <a
                    href="http://www.utsa.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    University of Texas at San Antonio
                  </a>
                </strong>
              </li>
              <li>Electrical Engineering Courses</li>
              <li>
                <div className="badge badge-secondary">3.4 GPA</div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
