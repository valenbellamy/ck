import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import TransitionLink from "gatsby-plugin-transition-link"
import { gsap } from "gsap"

const TRANSITION_LENGTH = 0.9

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

function debounce(fn, ms) {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

const Header = ({ siteTitle, headerClass, activeProjet, transitionStatus }) => {
  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  const headerEl = useRef(null)

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    gsap.from(headerEl.current, {
      alpha: 0,
      duration: 0.4,
      ease: "power3.inout",
    })
  }, [])

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth)
    }, 500)

    window.addEventListener("resize", debouncedHandleResize)

    return () => {
      window.removeEventListener("resize", debouncedHandleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth > 992) {
      setOpen(false)
    }
  }, [windowWidth])

  return (
    <header
      className={headerClass}
      ref={headerEl}
      style={{ opacity: transitionStatus === "exiting" ? 0 : 1 }}
    >
      <button
        className={open ? "nav-toggler --open" : "nav-toggler"}
        type="button"
        aria-expanded="false"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </button>
      <nav className={open ? "--open" : ""}>
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
              className={`${!activeProjet ? "--active" : ""}`}
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
