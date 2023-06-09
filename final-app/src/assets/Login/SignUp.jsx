import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import supabase from "../../services/supabase";
import facebookLogo from "../../../images/facebookLogo.svg";
import twitterLogo from "../../../images/twitterLogo.svg";

import './SignUp.scss'

function SignUp() {

    const navigation = useNavigate();

    const [ authError, setAuthError ] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();

        const { email, password, password_confirm } = e.target.elements;
        
        if (password.value !== password_confirm.value) {
            alert('Passwords must be the same')
            return;
        }


        let { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
            password_confirm: password_confirm.value,
        });


        if (!error) {
            navigation("/");
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
                        <form className="main-form" onSubmit={handleSignUp}>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <input type="password" name="password_confirm" placeholder="Confirm your password" />
                            <button>Register</button>
                        </form>
                </div>
                

                <div className="section-two">
                    <div className="new-account">
                        <Link to="/login/signin"><button>If you have an accoount - click here</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;