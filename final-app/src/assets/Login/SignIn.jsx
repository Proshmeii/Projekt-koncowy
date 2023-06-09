import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import supabase from "../../services/supabase";
import facebookLogo from "../../../images/facebookLogo.svg";
import twitterLogo from "../../../images/twitterLogo.svg";

import './SignIn.scss'

function SignIn() {

    const navigation = useNavigate();

    const [ authError, setAuthError ] = useState(null);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const { email, password } = e.target.elements;

        let { error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            navigation('/');
            return;
        }
        setAuthError(error.message);
    }

    return (
        <div className="body-container">
            <div className="container">
                <div className="section-one">
                    <div className="social-links">
                        <div className="facebook">
                            <span> LOGIN WITH FACEBOOK <br /> -soon- </span>
                            <div className="icon">
                                <img src={facebookLogo} alt="" />
                            </div>
                        </div>
                        <div className="twitter">
                            <div className="icon">
                                <img src={twitterLogo} alt="" srcSet="" />
                            </div>
                            <span> LOGIN WITH TWITTER <br /> -soon-</span>
                        </div>
                    </div>
                    {authError && <div style ={{ color: 'red' }}>{authError}</div>}
                        <form className="main-form" onSubmit={handleSignIn}>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button>Login</button>
                        </form>
                </div>
                

                <div className="section-two">
                    <div className="new-account">
                        <Link to="/login/signup"><button>Create New Account</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;