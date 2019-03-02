import React from "react"

const Education = () => {
  return (
    <section class="row">
      <div class="col-sm-3 col-sm-offset-1">
        <h2>Education</h2>
      </div>
      <div class="col-sm-7">
        <div class="row">
          <article class="col-sm-12">
            <ul class="fa-ul">
              <li>
                <i class="fa fa-li fa-university" />
                <strong>
                  <a href="http://www.tlu.edu">Texas Lutheran University</a>
                </strong>
              </li>
              <li>Physics</li>
              <li>
                <div class="badge badge-secondary">3.8 GPA</div>
                &nbsp;
                <div class="badge badge-info">Magna Cum Laude</div>
              </li>
            </ul>
            <ul class="fa-ul">
              <li>
                <i class="fa fa-li fa-university" />
                <strong>
                  <a href="http://www.utsa.edu">
                    University of Texas at San Antonio
                  </a>
                </strong>
              </li>
              <li>Electrical Engineering Courses</li>
              <li>
                <div class="badge badge-secondary">3.4 GPA</div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Education
