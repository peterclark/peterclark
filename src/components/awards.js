import React from "react"

const Awards = () => {
  return (
    <section class="row">
      <div class="col-md-3 col-md-offset-1">
        <h2>Awards & Certifications</h2>
      </div>
      <div class="col-md-7">
        <div class="row">
          <article class="col-sm-12">
            <ul class="fa-ul">
              <li>
                <i class="fa fa-li fa-certificate" />
                <strong>MongoDB Certified Developer</strong>
                &nbsp;
                <a
                  href="https://university.mongodb.com/certification/display_certificate?csrfmiddlewaretoken=XBcmluW9926kRCmX607vVZRTJuXFH4DzAfG7IZ1DLcpjUFoWYliszhuacxuQ6odu&license1=166&license2=666&license3=436"
                  target="_blank"
                >
                  166-666-436
                </a>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <strong>Diamond Achievement Award</strong>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <strong>Certified Scrum Master</strong>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <strong>Java Certified Developer</strong>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Awards
