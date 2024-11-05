import React from 'react'
import './HeroComponent.css'
import linkedin from '../../assets/images/linkedin-ico-black.png'
import github from '../../assets/images/github-ico-black.png'
import instagram from '../../assets/images/insta-ico-black.png'
import youtube from '../../assets/images/yt-ico-black.png'
const HeroComponent = () => {
  return (
    <React.Fragment>
        <section className='hero-section'>
           <div className='hero-content'>
                <h1 className='primary-heading'>
                    HEY, I'M DYANESHWARAN
                </h1>
                <div className='hero-info'>
                    <p className='primary-text'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
                </div>
                <div className='hero-project-button'>
                    <a href="./#projects" className="btn btn--bg">Projects</a>
                </div>
           </div>
           <div className="home-hero__socials">
                <div className="home-hero__social">
                        <a href="https://www.linkedin.com/in/dyanesh06" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src={linkedin} alt="Dyanesh Linkedin Profile" className="home-hero__social-icon"/>
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://www.youtube.com/@dyaneshd2742" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">
                            <img src={youtube} alt="Dyanesh Youtube Channel" className="home-hero__social-icon"/>
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://github.com/dyanesh-100" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                            <img src={github} alt="Dyanesh Github Profile" className="home-hero__social-icon"/>
                        </a>
                    </div>
                    <div className="home-hero__social">
                        <a href="https://www.instagram.com/dyanesh_07/" className="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                        <img src={instagram} alt="Dyanesh instagram Profile" className="home-hero__social-icon"/>
                    </a>
                </div>
            </div>
           <div className='hero-mouse-scroll'>
                <div className='mouse'>
                    ::before
                </div>
           </div>
        </section>
    </React.Fragment>
  )
}

export default HeroComponent