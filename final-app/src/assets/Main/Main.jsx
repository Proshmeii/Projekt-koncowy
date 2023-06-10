import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import supabase from "../../services/supabase";

import Navi from '../../assets/Navi/Navi.jsx'
import eftImg from '../../../images/eftmin_img.jpg';
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
        const { data } = await supabase.auth.getSession()

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
            <section className="nav-section">
                <Navi />
                <div className="logout-button-container">
                    <button className="logout-button" onClick={handleLogout}>Log Out
                    </button>
                </div>
            </section>
            <section className="header-img-section">
                <div className="header-img"></div>
            </section>
            <section>
                <div className="article-flex-container">
                    <article className="article-card">
                        <h1 className="article-header"> What is the Escape from Tarkov?</h1>
                        <div className="article-intro"><p>
                            Escape from Tarkov is a hardcore and realistic online first-person action RPG with MMO features developed by Russian Saint-Petersburg-based game developer, Battlestate Games. Set in the fictional Norvinsk region located on the frontier between Russia and Europe, the metropolis of Tarkov was plunged into anarchy thanks to the Contract Wars. What was once a bustling city, is now roamed by rivalling scavenger gangs, former private military forces, and black ops units. Between them all, there's you, your stash, and the escape back to the free world from the depths of Tarkov.
                        </p>
                        <h2 className="article-second-header">
                            Escape from Tarkov Download Size
                        </h2>
                        <p>
                        Currently, Escape From Tarkov's download size for a fresh install is around 12 GB. However, it is recommended to have a disk space of 15 GB for a smooth experience.
                        </p>
                        </div>
                        <div className="first-article-img-container">
                            <figure className="first-article-img"><img src={eftImg}></img></figure>
                        </div>
                    </article>
                </div>
            </section>
            <footer id="about-footer" className="about-section">
            <div className="about-header"><h2>About</h2></div>
                <div className="about-text">
                    <p>Escape from Tarkov is a multiplayer tactical first-person shooter video game in development by Battlestate Games for Windows. The game is set in the fictional Norvinsk region, where a war is taking place between two private military companies (United Security "USEC" and the Battle Encounter Assault Regiment "BEAR"). Players join matches called "raids" in which they fight other players and bots for loot and aim to survive and escape.
                    Escape From Tarkov has been a PC-exclusive game since it was first released in a beta state back in 2017
                    </p>
                    <br />
                    <p>TRY IT NOW</p>
                </div>
            </footer>
        </>
    )
}
export default Main;