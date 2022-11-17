import React from "react"
import "./Footer.scss"
import LogoFooter from "../../assets/images/logo-footer.svg"
const Footer = () => {
  return (
    <footer id="footer-main">
      <div className="container footer-main__content ">
        <div className="footer-main__content__left">
          <img src={LogoFooter} />
          <h2>Trip to be happy</h2>
          <p>
            Membantu market trip dan travel lebih aksesibel, dan juga
            berkontribusi mempromosikan pariwisata di Indonesia dengan
            pengalaman trip yang menyenangkan
          </p>
        </div>
        <div className="footer-main__content__right">
          <div className="footer-main__content__right__item">
            <h2>Sitemap</h2>
            <a href="#">Home</a>
            <a href="#">Benefit</a>
            <a href="#">Trip</a>
            <a href="#">Kontak</a>
          </div>
          <div className="footer-main__content__right__item">
            <h2>Kontak</h2>
            <p>Telepon: +62 85157933252</p>
            <p>Instagram: trippyofficial</p>
            <p> Jl Letkol Istiqlah 93 68422</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
