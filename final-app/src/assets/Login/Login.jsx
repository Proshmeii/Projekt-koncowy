import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import supabase from '../../services/supabase';

import Navi from '../Navi/Navi.jsx';

import './Login.scss';
import loginImg from '../../../images/login_img.jpg';

function Login() {
    return (
        <>
        <section>
            <Navi />
        </section>
        <section className="login-section">
            <div className="buttons-container">
                <div className="loginButtons">
                    <div className="signInButton"><Link to="/login/signin" style={{ color: 'inherit', textDecoration: 'none'}}><h2>Sign In</h2></Link></div>
                    <div className="signUpButton"><Link to="/login/signup" style={{ color: 'inherit', textDecoration: 'none'}}><h2>Sign Up</h2></Link></div>
                </div>
            </div>
        </section>
        <section>
            <div className="about-section"><h2>About</h2></div>
        </section>
        </>
    )
}

export default Login;