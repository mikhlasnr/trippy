import React from "react"
import Layout from "../../Layout"
import Destination from "./components/Destination"
import Header from "./components/Header"
import WhyUs from "./components/WhyUs"
import ContactUs from "./components/ContactUs"
const Home = () => {
  return (
    <Layout>
      <>
        <Header />
        <WhyUs/>
        <Destination/>
        <ContactUs/>
      </>
    </Layout>
  )
}

export default Home
