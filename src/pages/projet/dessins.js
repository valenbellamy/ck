import React, { useRef, useLayoutEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AnimWrapper from "../../components/animWrapper"
import { gsap } from "gsap"

function Dessins({ data, transitionStatus, entry, exit }) {
  const topEl = useRef(null)

  useLayoutEffect(() => {
    gsap.from(topEl.current, {
      y: 300,
      alpha: 0,
      skewY: 15,
      duration: 0.6,
      ease: "power3.inout",
    })
  }, [])

  return (
    <Layout
      headerClass="tertiary"
      activeProjet={true}
      transitionStatus={transitionStatus}
    >
      <SEO title="N20" />
      <div className="projet">
        <section className="">
          <div ref={topEl}>
            <h1 className="c-black">Dessins</h1>
            <div className="separator --mignon --sm  c-text-secondary mb-4">
              _
            </div>
            <p className="fs-xl c-text-secondary mb-1">
              Congrès bilatéral France/ Japon sur la sécurité nucléaire.{" "}
              <span className="c-text-tertiary">
                Création du logo et de l’identité visuelle. Déclinaison en
                supports imprimés.
              </span>
            </p>
            <div className="separator --mignon --xs c-text-secondary">_</div>
            <p className="c-text-secondary mt-2">
              Role:{" "}
              <span className="c-text-tertiary">Directeur artistique</span>
            </p>
            <p className="c-text-secondary">
              Agence: <span className="c-text-tertiary">Exirys</span>
            </p>
            <div className="images">
              <div className="images--left">
                <div className="image">
                  <Img
                    fluid={data.img1.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img3.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img5.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img7.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img9.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
              </div>
              <div className="images--right">
                <div className="image">
                  <Img
                    fluid={data.img2.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img4.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img6.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
                <div className="image">
                  <Img
                    fluid={data.img8.childImageSharp.fluid}
                    backgroundColor="#083a4b"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <AnimWrapper transitionStatus={transitionStatus} exit={exit} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "dessins/Dessin_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img2: file(relativePath: { eq: "dessins/Dessin_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img3: file(relativePath: { eq: "dessins/Dessin_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img4: file(relativePath: { eq: "dessins/Dessin_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img5: file(relativePath: { eq: "dessins/Dessin_5.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img6: file(relativePath: { eq: "dessins/Dessin_6.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img7: file(relativePath: { eq: "dessins/Dessin_7.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img8: file(relativePath: { eq: "dessins/Dessin_8.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img9: file(relativePath: { eq: "dessins/Dessin_9.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Dessins
