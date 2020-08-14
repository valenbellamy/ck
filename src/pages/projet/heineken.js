import React, { useRef, useLayoutEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AnimWrapper from "../../components/animWrapper"
import { gsap } from "gsap"

function Heineken({ data, transitionStatus, entry, exit }) {
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
            <h1 className="c-black">Heineken</h1>
            <div className="separator --mignon --sm  c-text-secondary mb-4">
              _
            </div>
            <p className="fs-xl c-text-secondary mb-1">
              L’agence Exirys réalise la communication et l’organisation de
              plusieurs évenements pour Heineken France.{" "}
              <span className="c-text-tertiary">
                Concours annuel de biérologie: Mise à jour du logo et de la
                charte graphique des éditions précédentes. Déclinaisons en
                supports imprimés (kakemonos, tabliers, affiches, livrets...).
              </span>
            </p>
            <div className="separator --mignon --xs c-text-secondary">_</div>
            <p className="c-text-secondary mt-2">
              Role: <span className="c-text-tertiary">Graphiste exe</span>
            </p>
            <p className="c-text-secondary">
              Agence: <span className="c-text-tertiary">Exirys</span>
            </p>

            <Img
              fluid={data.img1.childImageSharp.fluid}
              className="--specialMargin"
              backgroundColor="#083a4b"
            />
            <Img
              fluid={data.img2.childImageSharp.fluid}
              backgroundColor="#083a4b"
            />
            <Img
              fluid={data.img1.childImageSharp.fluid}
              backgroundColor="#083a4b"
            />
            <Img
              fluid={data.img2.childImageSharp.fluid}
              backgroundColor="#083a4b"
            />
          </div>
          <p className="fs-xl c-text-secondary">
            Menu:{" "}
            <span className="c-text-tertiary">
              Menu de la soirée de gala organisée pour les intervenants, jurys
              et finalistes du Concours de Biérologie.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            backgroundColor="#083a4b"
            className="--specialMargin"
          />
          <Img
            fluid={data.img2.childImageSharp.fluid}
            backgroundColor="#083a4b"
          />
          <p className="fs-xl c-text-secondary">
            Livret:{" "}
            <span className="c-text-tertiary">
              Programme d’un séjour d’initiation à la biérologie.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor="#083a4b"
            className="--specialMargin"
          />
          <p className="fs-xl c-text-secondary">
            Concours Fischerstub:{" "}
            <span className="c-text-tertiary">
              La fischerstub est l’usine historique ou fut inventée la bière
              Fischer. Afin de réhabiliter le bâtiment en musée un concours
              d’architecture fut organisé par Heineken france, détenteur de
              Fischer.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor="#083a4b"
            className="--specialMargin"
          />
          <Img
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor="#083a4b"
          />
        </section>
        <AnimWrapper transitionStatus={transitionStatus} exit={exit} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "n20/N20_1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img2: file(relativePath: { eq: "n20/N20_2.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img3: file(relativePath: { eq: "n20/N20_3.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img4: file(relativePath: { eq: "n20/N20_4.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Heineken
