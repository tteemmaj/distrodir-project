import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './nav-bar/styles.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import AllDistros from './all-distros/AllDistros';
import 'https://kit.fontawesome.com/d70b714f10.js'
import MxLinux from './distros-component/MxLinux'

function btnIcon () {
  const extended = document.querySelector("div.listNav");
  extended.classList.toggle("extended");
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='mainDiv'>
      <div className='logoName'><h1>DISTRODIR</h1></div>
      <div className='listNav'>
        <ul>
          <li><a href='#' className='navLinks'>Distros</a></li>
          <li><a href='#' className='navLinks'>Programas</a></li>
          <li><a href='#' id='btnBlog'>Blog</a></li>
        </ul>
      </div>
      <i className="fa-solid fa-bars" onClick={btnIcon}></i>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/all-distros' element={ <AllDistros /> } />
        <Route path='/mx-linux'  element= { <MxLinux /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
