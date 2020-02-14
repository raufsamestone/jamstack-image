import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      beachBoat: file(relativePath: { eq: "beach-boat.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, 
            duotone: {
            highlight: "#f00e2e",
            shadow: "#192555"
          }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
 
  `)

  const url = 'https://res.cloudinary.com/raufsamestone/image/upload/v1581192135/samples/landscapes/beach-boat.jpg'
  return (
  <>
  <Img style={{marginBottom:'2rem'}} fluid={data.beachBoat.childImageSharp.fluid} />
  <img src={url} />
  </>
  )
}

export default Image
