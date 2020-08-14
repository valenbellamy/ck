import React, { useRef, useLayoutEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AnimWrapper from "../../components/animWrapper"
import { gsap } from "gsap"

function MettiCottage({ data, transitionStatus, entry, exit }) {
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
            <h1 className="c-black">
              <span className="c-text-secondary">Metti </span>cottage
            </h1>
            <div className="separator --mignon --sm  c-text-secondary mb-4">
              _
            </div>
            <p className="fs-xl c-text-secondary mb-1">
              Hôtel d’éco-tourisme dans les molluques du nord en Indonésie.{" "}
              <span className="c-text-tertiary">
                Création de la marque «Metti cottage», de sa stratégie de
                communication ainsi que des supports destinés aux clients.
              </span>
            </p>
            <div className="separator --mignon --xs c-text-secondary">_</div>
            <p className="c-text-secondary mt-2">
              Role:{" "}
              <span className="c-text-tertiary">
                Directeur artistique freelance
              </span>
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
          </div>
          <p className="fs-xl c-text-secondary">
            Logo:{" "}
            <span className="c-text-tertiary">
              L’hôtel est situé sur une île d’1 Km carré dont la flore est
              dominée par les palmiers. Le logo est un condensé des impressions
              que les visiteurs auront en acostant.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <Img
            fluid={data.img3.childImageSharp.fluid}
            backgroundColor="#083a4b"
            className="--specialMargin"
          />
          <p className="fs-xl c-text-secondary">
            Promotion:{" "}
            <span className="c-text-tertiary">
              Dans un souci de préservation de la nature, la communication de
              Metti cottage ne se fait que par voie numérique. La promotion se
              fait sur facebook et la réservation sur Booking.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <Img
            fluid={data.img4.childImageSharp.fluid}
            backgroundColor="#083a4b"
            className="--specialMargin"
          />
          <p className="fs-xl c-text-secondary">
            Kit de l’explorateur:{" "}
            <span className="c-text-tertiary">
              Une fois son séjour réservé, le visiteur recevra un plan détaillé
              d’accès à l’île ainsi qu’une carte des lieux et des activités
              possibles dans la région.
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
          <p className="fs-xl c-text-secondary">
            Fresques:{" "}
            <span className="c-text-tertiary">
              Quelques peintures murales en extra afin d’animer les lieux.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
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

export default MettiCottage
