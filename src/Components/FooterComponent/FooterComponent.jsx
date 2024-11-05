import React from 'react'
import './FooterComponent.css'
import linkedin from '../../assets/images/linkedin-ico.png'
import github from '../../assets/images/github-ico.png'
import instagram from '../../assets/images/insta-ico.png'
import youtube from '../../assets/images/yt-ico.png'
const FooterComponent = () => {
  return (
    <footer className="main-footer">
      <div className="main-container">
        <div className="main-footer__upper">
          <div className="main-footer__row main-footer__row-1">
            <h2 className="heading heading-sm main-footer__heading-sm">
              <span>Social</span>
            </h2>
            <div className="main-footer__social-cont">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dyanesh06/">
                <img className="main-footer__icon" src={linkedin} alt="Dyanesh Linkedin Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://github.com/dyanesh-100">
                <img className="main-footer__icon" src={github} alt="Dyanesh Github Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/dyanesh_07/">
                <img className="main-footer__icon" src={instagram} alt="Dyanesh instagaram Profile"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@dyaneshd2742">
                <img className="main-footer__icon main-footer__icon--mr-none" src={youtube} alt="dyanesh Youtube Channel"/>
              </a>
            </div>
          </div>
          <div className="main-footer__row main-footer__row-2">
            <h2 className="heading heading-sm text-lt">Dyaneshwaran</h2>
            <p className="main-footer__short-desc">
                A web developer focused on building websites and web applications that drive the success of the overall product.
            </p>
          </div>
        </div>

        <div className="main-footer__lower">
          © Copyright 2024. Made by <a rel="noreferrer" target="_blank" href="/">Dyanehswaran</a>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent