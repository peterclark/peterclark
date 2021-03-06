import React from "react"

const Contact = () => {
  return (
    <section className="row">
      <div className="col-md-3 col-md-offset-1">
        <h2>Contact</h2>
      </div>
      <div className="col-md-7">
        <div className="row">
          <article className="col-md-6 col-lg-4 mt-2">
            <h5>Email</h5>
            <a href="mailto:peter@5clarks.net">peter@5clarks.net</a>
          </article>
          <article className="col-md-6 col-lg-4 mt-2">
            <h5>Phone</h5>
            <a href="tel:1-210-863-8260" title="call me">
              (210) 863-8260
            </a>
            <a
              href="sms:1-210-863-8260"
              title="send a text message"
              style={{ paddingLeft: "0.5rem" }}
            >
              <i className="fa fa-comment-o" />
            </a>
          </article>
          <article className="col-md-6 col-lg-4 mt-2">
            <h5>Website</h5>
            <a href="http://peterclark.us">www.peterclark.us</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
