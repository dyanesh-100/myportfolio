import React from 'react'
import DP  from '../../assets/images/profile-pic.jpg'
import { Link } from 'react-router-dom'
import './NavBarComponent.css'
const NavBarComponent = () => {
  return (
    <React.Fragment>
        <div className='header'>
            <div className='navbar-container'>
                <div className='header_logo-container'>
                    <div className='header_logo_img_cont'> 
                        <img src={DP} alt=""  className='header_logo_img'/>
                    </div>
                    <div className='header_logo-sub'>
                        DyaneshWaran
                    </div>
                </div>
                <div className='header_main'>
                    <ul className='header_links'>
                        <li className='header__link-wrapper'>
                            <a href ='./' className='header_link'>Home</a>
                        </li>
                        <li  className='header__link-wrapper'>
                            <a href ='./#about' className='header_link'>About</a>
                        </li>
                        <li className='header__link-wrapper'>
                            <a href ='./#projects' className='header_link'>Projects</a>
                        </li>
                        <li className='header__link-wrapper'>
                            <a href ='./#contact' className='header_link'>Contact</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
       
    </React.Fragment>
  )
}

export default NavBarComponent