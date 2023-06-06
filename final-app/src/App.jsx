import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './assets/Main/Main.jsx';
import Login from './assets/Login/Login.jsx';

import './App.scss';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}

export default App;
