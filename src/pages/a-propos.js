import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Indesign from "../components/picto/indesign"
import { graphql } from "gatsby"
import Img from "gatsby-image"

function aProposPage({ data }) {
  return (
    <Layout>
      <SEO title="A propos" />
      <div className="about">
        <section className="--specialPaddingTop">
          <div className="blk">
            <div className="separator --mignon --lg c-text mb-5">_</div>
            <p className="fs-lg c-text">
              Salut! Je suis graphiste et travaille actuellement en tant
              qu’indépendant à Chartres en Eure et loir. Graphiquement, j’aime
              les visuels épurés et directs, nourris d’une bonne réflexion en
              amont. J’ai un goût prononcé pour le dessin que je pratique depuis
              l’enfance. J’accorde une grande importance à produire un travail
              précis au pixel près.
            </p>
            <div className="separator --mignon --lg c-text mtn-5">_</div>
          </div>
        </section>
        <section className="bg-dark">
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
          <div className="blk">
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
            <div className="separator --dmRegular --sm c-text mb-2">-</div>
            <div className="text mb-5">
              <span className="ff-mignon c-text">Expert:</span>
              <br></br>
              <div className="icons mt-1">
                <Indesign />
                <Indesign />
                <Indesign />
              </div>
            </div>
            <div className="text">
              <span className="ff-mignon c-text">Professionnel</span>
              <br></br>
              <div className="icons mt-1">
                <Indesign />
                <Indesign />
              </div>
            </div>
          </div>
          <div className="blk">
            <h2 className="c-text mb-1">Techniques:</h2>
            <div className="separator --dmRegular --sm c-text">-</div>
            <div className="text mb-5">
              <p>
                Dessin, Storyboard, ... Bo. Magnat. Caborro mi, sus rem
                reptiustini cusam voluptae parum neceped quo minum ut{" "}
              </p>
            </div>
            <div className="text">
              <p>
                Dessin, Storyboard, ... Bo. Magnat. Caborro mi, sus rem
                reptiustini cusam voluptae parum neceped quo minum ut{" "}
              </p>
            </div>
          </div>
        </section>
        <section className="bg-dark">
          <div className="blk">
            <h2 className="c-white mb-1">Techniques</h2>
            <div className="separator --dmRegular --sm c-white mb-3">-</div>
            <div className="text ff-mignon c-white mb-2">
              Voyage autour du monde sans avion
              <br></br>
              <span className="ff-mignon-italic c-white">
                Septembre 2017 - Septembre 2018
              </span>
            </div>
          </div>
          <div className="cover-trip">
            <Img fluid={data.img2.childImageSharp.fluid} />
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
          <div className="blk --image">
            <Img fluid={data.img1.childImageSharp.fluid} />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const imagesQuery = graphql`
  query {
    img1: file(relativePath: { eq: "multicolored-skull.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "plant.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default aProposPage
