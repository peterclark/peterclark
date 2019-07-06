import React from "react"
import { SophosImage } from "./sophosImage"

const Sophos = () => {
  return (
    <div className="row">
      <article className="col-sm-12">
        <div className="company">
          <a
            href="https://sophos.com"
            target="_blank"
            className="logo"
            rel="noopener noreferrer"
            data-tip="Sophos"
          >
            <SophosImage />
          </a>
          <strong>Sophos</strong>
          <small>2019 - present</small>
        </div>
        <p>
          <strong>Senior Software Engineer</strong>
        </p>
        <p>
          Helping to build the first Unified Endpoint Protection Platform that
          autonomously prevents, detects, and responds to modern cyber-security
          threats. Built with technologies that include Ruby, React, Javascript,
          Osquery, Elasticsearch and AWS services such as Amazon Cognito,
          DynamoDB and Kinesis.
        </p>
      </article>
    </div>
  )
}

export default Sophos
