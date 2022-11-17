import React from "react"
import { whyUsData } from "./utils"

import "./WhyUs.scss"
import WhyUsBg from "../../../../assets/images/why-us-background.svg"

import { ReactComponent as IcArrowRightWhite } from "../../../../assets/icons/ic-arrow-right--blue.svg"
const WhyUs = () => {
  return (
    <article id="home-why-us">
      <img src={WhyUsBg} alt="" className="home-why-us__bg"/>
      <div className="container">
        <div className="home-why-us__title">
          <span>Kenapa trippy?</span>
          <h2>Keuntungan yang kami tawarkan</h2>
          <p>
            Trippy menawarkan kemudahan perjalanan keberbagai destinasi liburan
          </p>
        </div>
        <div className="home-why-us__content">
          {whyUsData.map((item) => {
            return (
              <div className="home-why-us__content__item">
                <img src={item.img} alt="ilust" />
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <a href="#">
                  Lihat detail <IcArrowRightWhite />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export default WhyUs
