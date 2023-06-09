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
        <section className="patch-section">
            <div className="patch-header"><h2>Patch Roadmap:</h2></div>
        </section>
        <section className="lobby-maps-section">
        </section>
        <footer id="about-footer" className="about-section">
            <div className="about-header"><h2>About</h2></div>
                <div className="about-text">
                    <p>Escape from Tarkov is a multiplayer tactical first-person shooter video game in development by Battlestate Games for Windows. The game is set in the fictional Norvinsk region, where a war is taking place between two private military companies (United Security "USEC" and the Battle Encounter Assault Regiment "BEAR"). Players join matches called "raids" in which they fight other players and bots for loot and aim to survive and escape.
                    Escape From Tarkov has been a PC-exclusive game since it was first released in a beta state back in 2017
                    </p>
                </div>
        </footer>
        </>
    )
}


export default Login;