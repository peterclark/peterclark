import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="row" id="small-banner">
    <div className="col text-center">
      <h1>{siteTitle}</h1>
      <p>web developer in san antonio</p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
