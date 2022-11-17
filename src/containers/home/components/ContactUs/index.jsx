import { Button } from "@mui/material"
import React from "react"
import { ReactComponent as IcIG } from "../../../../assets/icons/icon-instagram.svg"
import { ReactComponent as IcWhatsapp } from "../../../../assets/icons/icon-whatsapp.svg"
import "./ContactUs.scss"
const ContactUs = () => {
  return (
    <article id="home-contactus">
      <div className="container">
        <div className="home-contactus__title">
          <span>Masih bingung?</span>
          <h2>Trippy siap membantu kamu</h2>
          <p>
            Kami percaya bahwa menolong kebingunganmu akan mempermudah
            perjalananmu
          </p>
        </div>

        <div className="home-contactus__social-media">
          <Button variant="primary" className="tr-button home-contactus__social-media__wa">
            Whatsapp <IcWhatsapp />
          </Button>
          <Button className="tr-button home-contactus__social-media__ig">
            Instagram <IcIG />
          </Button>
        </div>
      </div>
    </article>
  )
}

export default ContactUs
