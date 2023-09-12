import React from 'react'
import syles from './homeSyles.css'
import Image0 from '../images/homeIMG.svg'
import { Link } from 'react-router-dom';

function homePage () {
    return(
        <div className='homeDiv'>
            <div className='homeLeftCont'>
                <h1>Bienvenido a <br></br> <span>DISTRODIR</span></h1>
                <p>
                    En nuestra página, encotnrarás una amplia selección de distribuciones de Linux listas para descargar, todas reunidas en un solo lugar conveniente. Si eres un apasionado de Linux, un entusiasta de la informática o simplemente alguien que quiere explorar el emocionante mundo del software de código abierto, ¡has llegado al sitio adecuado!
                </p>
                <Link to='/all-distros'>  <button>Ver todo</button> </Link>
            </div>
            <div className='homeRightCont'>
                <img src={Image0} />
            </div>
        </div>
    );
};

export default homePage;