import styled from "styled-components"
import Img from "gatsby-image"

export const ImageWrapper = styled.div`
  width: 14rem;
  margin: 1rem;
  font-size: 14px;
  font-weight: bold;
`
export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  flex-wrap: wrap;
  width: 100%;
`

export const BorderImageWrapper = styled.div`
  width: 14rem;
  margin: 1rem;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`

export const BorderImg = styled(Img)`
  border-radius: 10rem;
  margin: auto;
`
