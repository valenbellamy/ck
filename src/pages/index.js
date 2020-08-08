import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout activeProjet={true}>
      <SEO title="Home" />
      <div className="logo">
        <svg
          width="259"
          height="776"
          viewBox="0 0 259 776"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M158.254 420.357L137.975 440.637L238.292 540.954L258.572 520.674L158.254 420.357Z"
            fill="#083a4b"
          />
          <path
            d="M129.53 462.11V0.110352H100.85V462.11C100.844 469.198 98.7372 476.125 94.7957 482.016C90.8541 487.907 85.2548 492.497 78.7053 495.207C72.1558 497.917 64.9501 498.624 57.9986 497.24C51.0472 495.856 44.6621 492.442 39.6502 487.43C34.6383 482.418 31.2245 476.033 29.8403 469.082C28.4561 462.13 29.1635 454.925 31.8732 448.375C34.5829 441.825 39.1732 436.226 45.0641 432.285C50.955 428.343 57.8821 426.236 64.97 426.23V397.57C52.2135 397.574 39.7445 401.359 29.138 408.446C18.5316 415.534 10.2637 425.606 5.37883 437.39C0.493974 449.174 -0.788653 462.141 1.69299 474.654C4.17464 487.167 10.3092 498.663 19.3217 507.691C28.3342 516.719 39.8202 522.873 52.3287 525.376C64.8371 527.879 77.8068 526.618 89.5992 521.754C101.392 516.889 111.478 508.638 118.583 498.044C125.688 487.449 129.494 474.987 129.52 462.23V462.23L129.53 462.11Z"
            fill="#083a4b"
          />
          <path
            d="M100.85 449.26L106.39 431.78L209.62 328.55L229.9 348.82L129.46 449.26H129.53V775.84H100.85V449.26Z"
            fill="#083a4b"
          />
        </svg>
      </div>
      <section className="images">
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
          <Link to="/projet/n20" className="image">
            <div className="image__title c-text">
              <div className="separator c-text --dmRegular --xs">-</div>
              <h2>
                n<br></br>20
              </h2>
            </div>
            <Img fluid={data.img2.childImageSharp.fluid} />
          </Link>
          <div className="card c-text">
            <div className="border"></div>
            <h2>Et si nous travaillons ensemble?</h2>
            <div className="separator --dm --md c-text">_</div>
            <h3>clement.karl.d@gmail.com</h3>
          </div>
        </div>
        <div className="images--right">
          <Link to="/projet/n20" className="image">
            <div className="image__title c-secondary">
              <div className="separator c-secondary --dmRegular --xs">-</div>
              <h2>
                n<br></br>20
              </h2>
            </div>
            <Img fluid={data.img2.childImageSharp.fluid} />
          </Link>
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

export default IndexPage
