import React from "react"
import { Button } from "@mui/material"
import { packageList } from "./utils"
import { ReactComponent as IcArrowRight } from "../../../../assets/icons/ic-arrow-right--white.svg"
import { ReactComponent as IlustCircleCheckList } from "../../../../assets/ilust/ilust-destination-circle-checklist.svg"
import DestinationThumbnail from "../../../../assets/images/destinasi-thumb.png"
import "./Destination.scss"
const Destination = () => {
  return (
    <article id="home-destination">
      <div className="container">
        <div className="home-destination__title">
          <span>Siap berangkat?</span>
          <h2>Destinasi menarik dari Trippy</h2>
        </div>
        <div className="home-destination__content">
          <div className="home-destination__content__thumbnail">
            <img src={DestinationThumbnail} alt="thumbnail" />
          </div>
          <div className="home-destination__content__description">
            <div className="home-destination__content__description__title">
              <h3>Explore Ciletuh Geopark</h3>
              <p>Keberangkatan setiap tanggal 7, 14, dan 21</p>
            </div>
            <div className="home-destination__content__description__package">
              {packageList.map((text) => {
                return (
                  <div className="home-destination__content__description__package__item">
                    <IlustCircleCheckList />
                    <p>{text}</p>
                  </div>
                )
              })}
            </div>
            <div className="home-destination__content__description__footer">
              <div className="home-destination__content__description__footer__price">
                <p>Harga Terbaik</p>
                <h3>Rp. 1.000.000</h3>
                <span>Rp. 1.200.000</span>
              </div>
              <Button variant="primary" className="tr-button-blue--fill">
                Pesan Sekarang
                <IcArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Destination
