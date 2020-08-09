import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../static/fonts/fonts.css"
import "../static/style/index.scss"

const Layout = ({ children, headerClass, activeProjet, transitionStatus }) => {
  useEffect(() => {
    document.body.style.visibility = "visible"
  }, [])
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header
        activeProjet={activeProjet}
        headerClass={headerClass}
        siteTitle={data.site.siteMetadata.title}
        transitionStatus={transitionStatus}
      />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeProjet: PropTypes.bool,
}

export default Layout
