import React from "react"

const Contact = () => {
  return (
    <section className="row">
      <div className="col-sm-3 col-sm-offset-1">
        <h2>Contact</h2>
      </div>
      <div className="col-sm-7">
        <div className="row">
          <article className="col-sm-6 col-md-4">
            <h5>Email</h5>
            peter@5clarks.net
          </article>
          <article className="col-sm-6 col-md-4">
            <h5>Phone</h5>
            (210) 863-8260
          </article>
          <article className="col-sm-6 col-md-4">
            <h5>Website</h5>
            <a href="http://peterclark.us">www.peterclark.us</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
