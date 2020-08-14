import React, { useRef, useLayoutEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Indesign from "../components/picto/indesign"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AnimWrapper from "../components/animWrapper"
import { gsap } from "gsap"

function AProposPage({ data, transitionStatus, entry, exit }) {
  const textEl = useRef(null)
  const sep1El = useRef(null)
  const sep2El = useRef(null)
  const sectionEl = useRef(null)

  useLayoutEffect(() => {
    let tl = gsap.timeline()
    tl.from(textEl.current, {
      y: 250,
      skewY: 15,
      alpha: 0,
      duration: 0.6,
      ease: "power3.inout",
    })
      .from(sep1El.current, { scaleX: 0, duration: 0.4, ease: "power3.inout" })
      .from(
        sep2El.current,
        { scaleX: 0, duration: 0.4, ease: "power3.inout" },
        "<"
      )
      .from(sectionEl.current, { alpha: 0, duration: 0.4 }, "<")
  }, [])
  return (
    <Layout headerClass="secondary" transitionStatus={transitionStatus}>
      <SEO title="A propos" />
      <div className="about">
        <section className="--specialPaddingTop">
          <div className="blk --noMarginXs">
            <div
              className="separator --mignon --lg originRight c-text mb-5"
              ref={sep1El}
            >
              _
            </div>
            <p className="fs-lg c-text" ref={textEl}>
              Salut! Je suis graphiste et travaille actuellement en tant
              qu’indépendant à Chartres en Eure et loir. Graphiquement, j’aime
              les visuels épurés et directs, nourris d’une bonne réflexion en
              amont. J’ai un goût prononcé pour le dessin que je pratique depuis
              l’enfance. J’accorde une grande importance à produire un travail
              précis au pixel près.
            </p>
            <div
              className="separator --mignon --lg c-text originLeft mtn-5"
              ref={sep2El}
            >
              _
            </div>
          </div>
        </section>
        <section className="bg-dark" ref={sectionEl}>
          <div className="blk">
            <h3 className="c-secondary">Carrière</h3>
            <div className="separator --dmRegular --sm c-secondary mb-1">-</div>
            <div className="text ff-mignon c-secondary mb-2">
              Graphiste indépendant <span className="c-white">CK Design</span>
              <br></br>
              <span className="ff-mignon-italic c-secondary">
                Novembre 2018 > Aujourd’hui
              </span>
            </div>
            <div className="text ff-mignon c-secondary mb-2">
              Graphiste Exécutant <span className="c-white">Agence Exirys</span>
              <br></br>
              <span className="ff-mignon-italic c-secondary">
                Août 2015 - Août 2017
              </span>
            </div>
            <div className="text ff-mignon c-white">
              Portraitiste
              <br></br>
              <span className="ff-mignon-italic c-secondary">
                Juin 2014 - Juillet 2015
              </span>
            </div>
          </div>
          <div className="blk --noMarginXs">
            <h3 className="c-white">Formation</h3>
            <div className="separator --dmRegular --sm c-white mb-1">-</div>
            <div className="text ff-mignon c-white mb-2">
              Concepteur en communication visuelle{" "}
              <span className="c-secondary">E.S.A.T</span>
              <br></br>
              <span className="ff-mignon-italic c-white">2009 - 2012</span>
            </div>
            <div className="text ff-mignon c-white mb-2">
              Prépa <span className="c-secondary">Ateliers de Sèvres</span>
              <br></br>
              <span className="ff-mignon-italic c-white">2008 - 2009</span>
            </div>
            <div className="text ff-mignon c-white">
              MANAA publique{" "}
              <span className="c-secondary">Institut Ste. Geneviève</span>
              <br></br>
              <span className="ff-mignon-italic c-white">2007 - 2008</span>
            </div>
          </div>
        </section>
        <section>
          <div className="blk">
            <h2 className="c-text mb-1">Logiciels</h2>
            <div className="separator --dmRegular --sm c-text">-</div>
            <div className="text mb-5">
              <span className="ff-mignon c-text">Expert:</span>
              <br></br>
              <div className="icons mt-1">
                <Img fluid={data.img1.childImageSharp.fluid} />
                {/* <Indesign />
                <Indesign />
                <Indesign /> */}
              </div>
            </div>
            <div className="text">
              <span className="ff-mignon c-text">Professionnel</span>
              <br></br>
              <div className="icons mt-1">
                <Img fluid={data.img2.childImageSharp.fluid} />
                {/* <Indesign />
                <Indesign /> */}
              </div>
            </div>
          </div>
          <div className="blk --noMarginXs">
            <h2 className="c-text mb-1">Techniques:</h2>
            <div className="separator --dmRegular --sm c-text">-</div>
            <div className="text mb-5">
              <p className="c-text">
                Dessin, Storyboard, ... Bo. Magnat. Caborro mi, sus rem
                reptiustini cusam voluptae parum neceped quo minum ut{" "}
              </p>
            </div>
            <div className="text">
              <p className="c-text">
                Dessin, Storyboard, ... Bon. Magnat. Caborro mi, sus rem
                reptiustini cusam voluptae parum neceped quo minum ut{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-dark">
          <div className="blk --noMarginXs">
            <h2 className="c-white mb-1">Techniques</h2>
            <div className="separator --dmRegular --sm c-white mb-2">-</div>
            <div className="text ff-mignon c-white">
              Voyage autour du monde sans avion
              <br></br>
              <span className="ff-mignon-italic c-white">
                Septembre 2017 - Septembre 2018
              </span>
            </div>
          </div>
          <div className="cover-trip">
            <Img fluid={data.img3.childImageSharp.fluid} />
          </div>
        </section>
        <section>
          <div className="blk">
            <h2 className="c-text mb-1">
              Contactez <br></br>ce type
            </h2>
            <div className="separator --dmRegular --sm c-text">-</div>
            <div className="text c-text ff-dm-medium">
              clement.karl.d@gmail.com
            </div>
          </div>
          <div className="blk --image --noMarginXs">
            <Img fluid={data.img4.childImageSharp.fluid} />
          </div>
        </section>
        <AnimWrapper transitionStatus={transitionStatus} exit={exit} />
      </div>
    </Layout>
  )
}

export const imagesQuery = graphql`
  query {
    img1: file(relativePath: { eq: "about/About_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img2: file(relativePath: { eq: "about/About_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img3: file(relativePath: { eq: "about/About_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img4: file(relativePath: { eq: "about/About_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AProposPage
