import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePage from './HomePage'

const IndexPage = () => (
  <div className="App">
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <HomePage />
    </Layout>
  </div>
)

export default IndexPage
