import React from 'react'
import ReactDOM from 'react-dom/client'
import Navi from './assets/Navi/Navi'
import App from './App.jsx'
import './App.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navi />
  </React.StrictMode>,
)
