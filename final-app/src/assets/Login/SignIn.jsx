import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import supabase from "../../services/supabase";

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
        <div>
            <h1>Sign In</h1>
            {
                authError && <div style ={{ color: 'red' }}>{authError}</div>
            }
            <form onSubmit={handleSignIn}>
                <input id="email" type="email" placeholder="Enter your email address" />
                <br />
                <input id="password" type="password" placeholder="Enter your password" />
                <br />
                <button>Sign In</button>
            </form>
            <Link to="/login/signup">Create an account</Link>
        </div>
    )
}

export default SignIn;