import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './Navi.scss'
import logoImg from '../../../images/logo_img.png'
import logoMobileImg from '../../../images/logo_mobile_img.png'

function Navi() {
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
                                <div className="navi-login-button">Login</div>
                                <div className="navi-home-button">Home</div>
                                <div className="navi-about-button">About</div>
                            </div>
                        </div>
                    </div>
                </header>
            
        </>
    );
}
export default Navi;