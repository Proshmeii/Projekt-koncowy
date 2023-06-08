import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import supabase from '../../services/supabase';

import './SignUp.scss'

function SignUp() {

    const navigation = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();

        const {email, password, password_confirm } = e.target.elements;

        if (password.value !== password_confirm.value) {
            alert('Both passwords must be the same')
            return;
        }

        let { error } = await supabase.auth.signUp({
            email: email.value,
            password: password.value,
        });

        if (!error) {
            navigation("/");
            return;
        }
        console.error(error);
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <input id="email" type="email" placeholder="Enter your email address" />
                <br />
                <input id="password" type="password" placeholder="Enter your password" />
                <br />
                <input id="password_confirm" type="password" placeholder="Confirm your password" />
                <br />
                <button>Sign Up</button>
            </form>
            <Link to="/login/signin">Sign In</Link>
        </div>
    )
}

export default SignUp;