import React, { useState, useRef, useLayoutEffect } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TransitionLink from "gatsby-plugin-transition-link"
import AnimWrapper from "../components/animWrapper"
import { gsap } from "gsap"

const TRANSITION_LENGTH = 0.9

const exitTransition = {
  state: { color: "#ffffff" },
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

const IndexPage = ({ data, transitionStatus, entry, exit }) => {
  const [animation, setAnimation] = useState(false)
  const path1El = useRef(null)
  const path2El = useRef(null)
  const path3El = useRef(null)
  const imagesEl = useRef(null)

  useLayoutEffect(() => {
    console.log(path3El.current.getTotalLength())
    setAnimation(true)
    // gsap.to(imagesEl.current, {
    //   alpha: 1,
    //   duration: 0.6,
    //   ease: "power3.inout",
    // })
    gsap.from(imagesEl.current, {
      alpha: 0,
      duration: 0.6,
      ease: "power3.inout",
    })
  }, [])

  return (
    <Layout activeProjet={true} transitionStatus={transitionStatus}>
      <SEO title="Accueil" />
      <div className="home">
        <div className="logo">
          <svg
            className={animation ? "--anim" : ""}
            x="0px"
            y="0px"
            viewBox="0 0 317.55 800"
          >
            <path
              className="path1"
              ref={path1El}
              d="M164.41,439.41l118.37,119.94"
            />
            <path
              className="path2"
              ref={path2El}
              d="M245.73,357.23L141.52,462.84v323.13"
            />
            <path
              className="path3"
              ref={path3El}
              d="M90.6,425.15
	c-28.12,0-50.92,23.11-50.92,51.61c0,28.5,22.8,51.61,50.92,51.61c28.12,0,50.92-23.11,50.92-51.61V9.77"
            />
          </svg>
        </div>
        <section className="images" ref={imagesEl}>
          <div className="images--left">
            <TransitionLink
              className="image"
              to="/projet/metti-cottage"
              exit={exitTransition}
              entry={entryTransition}
            >
              <div className="image__title c-white">
                <div className="separator c-white  --dmRegular --xs">-</div>
                <h2>
                  metti<br></br>cottage
                </h2>
              </div>
              <Img
                fluid={data.img1.childImageSharp.fluid}
                backgroundColor="#083a4b"
              />
            </TransitionLink>
            <TransitionLink
              to="/projet/n20"
              exit={exitTransition}
              entry={entryTransition}
              className="image"
            >
              <div className="image__title c-text">
                <div className="separator c-text --dmRegular --xs">-</div>
                <h2>
                  n<br></br>20
                </h2>
              </div>
              <Img
                fluid={data.img2.childImageSharp.fluid}
                backgroundColor="#083a4b"
              />
            </TransitionLink>
            <div className="card c-text">
              <div className="border"></div>
              <h2>Et si nous travaillons ensemble?</h2>
              <div className="separator --dm --md c-text">_</div>
              <h3>clement.karl.d@gmail.com</h3>
            </div>
          </div>
          <div className="images--right">
            <TransitionLink
              to="/projet/heineken"
              exit={exitTransition}
              entry={entryTransition}
              className="image"
            >
              <div className="image__title c-secondary">
                <div className="separator c-secondary --dmRegular --xs">-</div>
                <h2>Heineken</h2>
              </div>
              <Img
                fluid={data.img2.childImageSharp.fluid}
                backgroundColor="#083a4b"
              />
            </TransitionLink>
            <TransitionLink
              to="/projet/dessins"
              exit={exitTransition}
              entry={entryTransition}
              className="image"
            >
              <div className="image__title c-white">
                <div className="separator c-white --dmRegular --xs">-</div>
                <h2>dessins</h2>
              </div>
              <Img
                fluid={data.img1.childImageSharp.fluid}
                backgroundColor="#083a4b"
              />
            </TransitionLink>
            <TransitionLink
              to="/projet/graphismes"
              exit={exitTransition}
              entry={entryTransition}
              className="image"
            >
              <div className="image__title c-white">
                <div className="separator c-white --dmRegular --xs">-</div>
                <h2>graphismes</h2>
              </div>
              <Img
                fluid={data.img1.childImageSharp.fluid}
                backgroundColor="#083a4b"
              />
            </TransitionLink>
          </div>
        </section>
        <AnimWrapper transitionStatus={transitionStatus} exit={exit} />
      </div>
    </Layout>
  )
}

export const imagesQuery = graphql`
  query {
    img1: file(relativePath: { eq: "multicolored-skull.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img2: file(relativePath: { eq: "plant.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default IndexPage
