import React from "react"
import "./Nav.scss"
import { ReactComponent as Logo } from "../../assets/images/logo-nav.svg"
const Nav = () => {
  return (
    <nav id="navbar-main">
      <div className="container">
        <div className="navbar-main__inner">
          <Logo />
          <div className="navbar-main-menu">
            <a href="#">Home</a>
            <a href="#">Benefit</a>
            <a href="#">Trip</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
