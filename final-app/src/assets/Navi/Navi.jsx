import React from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Navi.scss'
import logoImg from '../../../images/logo_img.png'
import logoMobileImg from '../../../images/logo_mobile_img.png'

function Navi() {

    const handleClickScroll = () => {

        const element = document.getElementById('about-footer');
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
                <header className="layout-header">
                    <div className="layout-navi">
                        <div className="navigation-bar">
                            <div className="v_align">
                                <a href="/">
                                    <img className="logo-mobile" src={logoMobileImg} alt="mobile_logo"></img>
                                    <img className="logo-desktop" src={logoImg} alt="desktop_logo"></img>  
                                </a>
                            </div>
                            <div className="navi">
                                <div className="navi-login-button"><Link to="/login" style={{ color: 'inherit', textDecoration: 'none'}}>Login</Link></div>
                                <div className="navi-home-button"><Link to="/" style={{ color: 'inherit', textDecoration: 'none'}}>Home</Link></div>
                                <div className="navi-about-button" onClick={handleClickScroll}><Link style={{ color: 'inherit', textDecoration: 'none'}}>About</Link></div>
                            </div>
                        </div>
                    </div>
                </header>
            
        </>
    );
}
export default Navi;