import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import supabase from "../../services/supabase";

import Navi from '../../assets/Navi/Navi.jsx'

import './Main.scss'

function Main () {
    let alreadyMounted = false;
    const navigation = useNavigate();

    useEffect(() => {

        if (!alreadyMounted) {
            getSession();
        }
        alreadyMounted = true;
    }, []);

    const getSession = async() => {
        const { data, error } = await supabase.auth.getSession()

        if (!data.session) {
            navigation('/login/signin')
        }

    }

    const handleLogout = async () => {
        let { error } = await supabase.auth.signOut();

        if (!error) {
            navigation("login/signin") 
        }
    }

    return (
        <>
            <Navi />
            <div className="logout-button">
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </>
    )
}
export default Main;