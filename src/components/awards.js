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
                <a
                  href="https://www.dropbox.com/s/irucqzswao2c4iy/Mastering%20React%20Certification.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Mastering React</strong>
                </a>
                <small> 2019</small>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <a
                  href="https://university.mongodb.com/certification/display_certificate?csrfmiddlewaretoken=XBcmluW9926kRCmX607vVZRTJuXFH4DzAfG7IZ1DLcpjUFoWYliszhuacxuQ6odu&license1=166&license2=666&license3=436"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>MongoDB Certified Developer</strong>
                </a>
                <small> 2015</small>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <strong>Diamond Achievement Award</strong>
                <small> 2012</small>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <a
                  href="https://www.dropbox.com/s/rolcsrjv15dpoq5/Scrum%20Certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Certified Scrum Master</strong>
                </a>
                <small> 2008</small>
              </li>
              <li>
                <i class="fa fa-li fa-certificate" />
                <a
                  href="https://www.dropbox.com/s/pn9e3t4j0dpnkku/Java%20Certified%20Professional.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Java Certified Developer</strong>
                </a>
                <small> 2001</small>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Awards
