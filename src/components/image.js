import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as S from "../components/styled"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      hera_traced_webp: file(relativePath: { eq: "hera.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1200
            duotone: { highlight: "#f00e2e", shadow: "#192555" }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      hera_org: file(relativePath: { eq: "hera.jpg" }) {
        childImageSharp {
          original {
            src
          }
        }
        name
      }
      hera_nobase: file(relativePath: { eq: "hera.jpg" }) {
        childImageSharp {
          fluid (maxWidth: 2400) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      hera_fixed: file(relativePath: { eq: "hera.jpg" }) {
        childImageSharp {
          fixed(width: 160, height:160, quality:100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      hera_traced: file(relativePath: { eq: "hera.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const url =
    "https://res.cloudinary.com/raufsamestone/image/upload/f_auto/v1582444539/IMG_0667_p9yomw.jpg"
  return (
    <S.FlexWrapper>
      <S.ImageWrapper>
        <Img
          fluid={data.hera_traced.childImageSharp.fluid}
          alt={data.hera_org.name}
        />
        <p>Gatsby API (Traced SVG)</p>
      </S.ImageWrapper>

      <S.ImageWrapper>
        <Img
          fluid={data.hera_traced_webp.childImageSharp.fluid}
          alt={data.hera_traced_webp.name}
        />
        <p>Gatsby API (Webp, Traced SVG DuoTone)</p>
      </S.ImageWrapper>

      <S.ImageWrapper>
        <Img
          fluid={data.hera_nobase.childImageSharp.fluid}
          alt={data.hera_org.name}
        />
        <p>Gatsby API (No Base)</p>
      </S.ImageWrapper>

      <S.ImageWrapper>
        <Img
          durationFadeIn={6000}
          fluid={data.hera_nobase.childImageSharp.fluid}
          alt={data.hera_org.name}
        />
        <p>Gatsby API (No BaseDuration Fade-In)</p>
      </S.ImageWrapper>

      <S.ImageWrapper>
        <Img
          backgroundColor={"magenta"}
          fluid={data.hera_nobase.childImageSharp.fluid}
          alt={data.hera_org.name}
        />
        <p>Gatsby API (No Base - Background Color)</p>
      </S.ImageWrapper>
      

      <S.BorderImageWrapper>
        <S.BorderImg
          loading="eager"

          fixed={data.hera_fixed.childImageSharp.fixed}
          alt={data.hera_org.name}
        />
        <p>Gatsby API Fixed Custom Styled (Eager-ObjectFit-Position)</p>
      </S.BorderImageWrapper>

      <S.ImageWrapper>
        <img src={url} alt={data.hera_org.name} />
        <p>CDN</p>
      </S.ImageWrapper>
      <S.ImageWrapper>
        <img
          src={data.hera_org.childImageSharp.original.src}
          alt={data.hera_org.name}
        />
        <p>Original </p>
      </S.ImageWrapper>

    </S.FlexWrapper>
  )
}

export default Image
