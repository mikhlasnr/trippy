import React from "react"
import Layout from "../../Layout"
import Destination from "./components/Destination"
import Header from "./components/Header"
import WhyUs from "./components/WhyUs"

const Home = () => {
  return (
    <Layout>
      <>
        <Header />
        <WhyUs/>
        <Destination/>
      </>
    </Layout>
  )
}

export default Home
