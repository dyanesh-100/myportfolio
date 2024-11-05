import React from 'react'
import NavBarComponent from '../../Components/NavBarComponent/NavBarComponent'
import HeroComponent from '../../Components/HeroComponent/HeroComponent'
import AboutMeComponent from '../../Components/AboutMeComponent/AboutMeComponent'
import MyProjectsComponent from '../../Components/MyProjectsComponent/MyProjectsComponent'
import ContactMeComponent from '../../Components/ContactMeComponent/ContactMeComponent'
import FooterComponent from '../../Components/FooterComponent/FooterComponent'

const MyPortfolioPage = () => {
  return (
    <React.Fragment>
            <NavBarComponent/>
            <HeroComponent/>
            <AboutMeComponent/>
            <MyProjectsComponent/>
            <ContactMeComponent/>
            <FooterComponent/>
    </React.Fragment>
  )
}

export default MyPortfolioPage