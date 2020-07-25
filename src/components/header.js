import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    {/* <div class="cube"></div>
    <div class="cube --bis"></div> */}
    <nav>
      <div class="separator --dm --md c-text">_</div>
      <ul>
        <li>
          <Link to="/" activeClassName="--active">
            Work
          </Link>
        </li>
        <li>
          <Link to="a-propos">About</Link>
        </li>
      </ul>
      <div class="separator --dm --md c-text">_</div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
