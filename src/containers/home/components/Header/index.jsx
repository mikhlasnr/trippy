import React from "react"
import "./Header.scss"
import { ReactComponent as IcArrowRight } from "../../../../assets/icons/_Icon Wrap.svg"
import { ReactComponent as Hero } from "../../../../assets/images/home-header-hero.svg"
import { Button } from "@mui/material"
const Header = () => {
  return (
    <div id="home-header">
      <div className="container">
        <div className="home-header__text">
          <h1>Rencanakan liburan dengan Trippy!</h1>
          <p>
            Trippy adalah marketplace open trip yang membantu kamu mencari
            destinasi liburan dari berbagai vendor open trip
          </p>
          <Button variant="primary" className="tr-button-white--fill">
            Lihat Tawaran
            <IcArrowRight />
          </Button>
        </div>
      </div>
      <Hero className="home-header-hero"/>
    </div>
  )
}

export default Header
