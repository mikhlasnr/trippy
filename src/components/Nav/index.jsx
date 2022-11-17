import React, {useEffect} from "react"
import "./Nav.scss"
import { ReactComponent as Logo } from "../../assets/images/logo-nav.svg"
const Nav = () => {
  useEffect(() => {
    const getNavbar = document.getElementById("navbar-main");
    window.addEventListener('scroll', function () {
      const scrollFromTop = window.pageYOffset
      if(scrollFromTop > 0){
        getNavbar.classList.add("navbar-main--scroll")
      }else{
        getNavbar.classList.remove("navbar-main--scroll")
      }
    })
  }, [])
  
  return (
    <nav id="navbar-main">
      <div className="container">
        <div className="navbar-main__inner">
          <Logo />
          <div className="navbar-main-menu">
            <a href="#home-header">Home</a>
            <a href="#home-why-us">Benefit</a>
            <a href="#home-destination">Trip</a>
            <a href="#home-contactus">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
