import React, { useState, useRef, useLayoutEffect } from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Image from "../components/image"
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
    //console.log(path1El.current.getTotalLength())
    // setTimeout(() => {
    //   setAnimation(true)
    // }, 10)
    setAnimation(true)
    // gsap.to(imagesEl.current, {
    //   y: 0,
    //   alpha: 1,
    //   skewY: 0,
    //   duration: 0.6,
    //   ease: "power3.inout",
    // })
    // gsap.from(imagesEl.current, {
    //   y: 300,
    //   alpha: 0,
    //   skewY: 15,
    //   duration: 0.6,
    //   ease: "power3.inout",
    // })
  }, [])

  return (
    <Layout activeProjet={true} transitionStatus={transitionStatus}>
      <SEO title="Home" />
      <div className="logo">
        <svg
          width="225"
          height="764"
          viewBox="0 0 225 764"
          fill="none"
          className={animation ? "--anim" : ""}
        >
          <path
            className="path1"
            ref={path1El}
            d="M121 427L219 526"
            stroke="#083a4b"
            strokeWidth="24"
          />
          <path
            className="path2"
            ref={path2El}
            d="M106 764V599V434L209 327"
            stroke="#083a4b"
            strokeWidth="24"
          />
          <path
            className="path3"
            ref={path3El}
            d="M57 412C40.6667 413.333 8 425 8 461C8 497 30 512 57 512C84 512 105.2 494.6 106 461C106.8 427.4 106.333 145 106 1"
            stroke="#083a4b"
            strokeWidth="24"
          />
        </svg>
      </div>
      <section className="images" ref={imagesEl}>
        <div className="images--left">
          <div className="image">
            <div className="image__title c-white">
              <div className="separator c-white  --dmRegular --xs">-</div>
              <h2>
                metti<br></br>cottage
              </h2>
            </div>
            <Img fluid={data.img1.childImageSharp.fluid} />
          </div>
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
            <Img fluid={data.img2.childImageSharp.fluid} />
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
            to="/projet/n20"
            exit={exitTransition}
            entry={entryTransition}
            className="image"
          >
            <div className="image__title c-secondary">
              <div className="separator c-secondary --dmRegular --xs">-</div>
              <h2>
                n<br></br>20
              </h2>
            </div>
            <Img fluid={data.img2.childImageSharp.fluid} />
          </TransitionLink>
          <div className="image">
            <div className="image__title c-white">
              <div className="separator c-white --dmRegular --sm">-</div>
              <h2>
                metti<br></br>cottage
              </h2>
            </div>
            <Img fluid={data.img1.childImageSharp.fluid} />
          </div>
        </div>
      </section>
      <AnimWrapper transitionStatus={transitionStatus} exit={exit} />
    </Layout>
  )
}

export const imagesQuery = graphql`
  query {
    img1: file(relativePath: { eq: "multicolored-skull.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img2: file(relativePath: { eq: "plant.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
