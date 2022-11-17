import React from "react"
import Layout from "../../Layout"
import Header from "./components/Header"
import WhyUs from "./components/WhyUs"

const Home = () => {
  return (
    <Layout>
      <>
        <Header />
        <WhyUs/>
      </>
    </Layout>
  )
}

export default Home
