import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerClass, activeProjet }) => (
  <header className={headerClass}>
    <nav>
      <div className="separator --dm --md">_</div>
      <ul>
        <li>
          <Link
            to="/"
            activeClassName="--active"
            className={`${activeProjet ? "--active" : ""}`}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link to="/a-propos" activeClassName="--active">
            A propos
          </Link>
        </li>
      </ul>
      <div className="separator --dm --md">_</div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  headerClass: PropTypes.string,
  activeProjet: PropTypes.bool,
}

Header.defaultProps = {
  siteTitle: ``,
  headerClass: ``,
  activeProjet: false,
}

export default Header
