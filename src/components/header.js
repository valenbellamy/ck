import React, { useRef, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap"

const TRANSITION_LENGTH = 1

const exitTransition = {
  state: { color: "#fed169" },
  length: TRANSITION_LENGTH,
  trigger: () => {
    if (document) {
      // var header = document.getElementsByTagName("header")[0]
      // header.style.opacity = 0
      //document.body.style.overflow = "hidden"
    }
  },
}

const entryTransition = {
  delay: TRANSITION_LENGTH,
  trigger: () => {
    if (document && window) {
      window.scrollTo(0, 0)
      //document.body.style.overflow = "visible"
    }
  },
}

const Header = ({ siteTitle, headerClass, activeProjet, transitionStatus }) => {
  const headerEl = useRef(null)
  useEffect(() => {
    gsap.from(headerEl.current, {
      alpha: 0,
      duration: 0.4,
      ease: "power3.inout",
    })
  }, [])
  return (
    <header className={headerClass} ref={headerEl}>
      <nav style={{ opacity: transitionStatus === "exiting" ? 0 : 1 }}>
        <div className="separator --dm --md">_</div>
        <ul>
          <li>
            <TransitionLink
              to="/"
              exit={exitTransition}
              entry={entryTransition}
              activeClassName="--active"
              className={`${activeProjet ? "--active" : ""}`}
            >
              Projets
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              to="/a-propos"
              exit={exitTransition}
              entry={entryTransition}
              activeClassName="--active"
            >
              A propos
            </TransitionLink>
          </li>
        </ul>
        <div className="separator --dm --md">_</div>
      </nav>
    </header>
  )
}

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
