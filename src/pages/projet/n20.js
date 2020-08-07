import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql } from "gatsby"
import Img from "gatsby-image"

function N20({ data }) {
  return (
    <Layout headerClass="tertiary" activeProjet={true}>
      <SEO title="N20" />
      <div className="projet">
        <section className="">
          <h1 className="c-black">
            <span className="c-text-secondary">N</span>20
          </h1>
          <div className="separator --mignon --sm  c-text-secondary mb-4">
            _
          </div>
          <p className="fs-xl c-text-secondary mb-1">
            Congrès stratégique bilatéral France/ Japon sur l’énergie
            nucléaire.Cabore, eat.{" "}
            <span className="c-text-tertiary">
              Acerro diti repudae cea cum cust accae nam et incto delenda num
              volorest, ad eiunt, int.Toraecati officatur, estem dolupta.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary">_</div>
          <p className="c-text-secondary mt-2">
            Role: <span className="c-text-tertiary">Directeur artistique</span>
          </p>
          <p className="c-text-secondary">
            Agence: <span className="c-text-tertiary">Exirys</span>
          </p>
          <Img
            fluid={data.img1.childImageSharp.fluid}
            style={{ marginBottom: "10rem" }}
          />
          <p className="fs-xl c-text-secondary">
            Logo:{" "}
            <span className="c-text-tertiary">
              Cabore, eat. Acerro diti repudae cea cum cust accae nam et incto
              delenda num volorest, ad eiunt, int.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary mb-3">_</div>
          <p className="fs-xl c-text-secondary">
            Livret:{" "}
            <span className="c-text-tertiary">
              Cabore, eat. Acerro diti repudae cea cum cust accae nam et incto
              delenda num volorest, ad eiunt, int.
            </span>
          </p>
          <div className="separator --mignon --xs c-text-secondary mb-1">_</div>
          <Img fluid={data.img2.childImageSharp.fluid} />
          <Img fluid={data.img3.childImageSharp.fluid} />
          <Img fluid={data.img4.childImageSharp.fluid} />
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    img1: file(relativePath: { eq: "n20/N20_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "n20/N20_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "n20/N20_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img4: file(relativePath: { eq: "n20/N20_4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default N20
