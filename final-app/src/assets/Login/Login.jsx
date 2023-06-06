import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Navi from '../Navi/Navi';

import './Login.scss';

function Login() {
    return (
        <>
            <Navi />

                <h2>Sign In</h2>
                <h2>Sign Up</h2>
                    <Routes>
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                    </Routes>
        </>
    )
}

export default Login;