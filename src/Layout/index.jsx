import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import "./Layout.scss"
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
