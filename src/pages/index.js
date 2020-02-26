import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
    title="JAMstack Image Performance"
    />
    <Image />
  </Layout>
)

export default IndexPage
