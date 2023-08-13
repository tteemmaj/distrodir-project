import React from 'react';
import style from './cardstyle.css';

function card (props) {
    return(
        <div className='mainCardDiv'>
            <div className='imgBg'>
                <img src={require(`../images/distros/distro-${props.image}.png`)} />
            </div>
            <h1 className='titleDistro'> {props.nombre} </h1>
            <p> <strong> Basado en: </strong> {props.basado}</p>
            <p> <strong> Arquitectura: </strong> {props.arquitectura} </p>
            <p> <strong> Escritorio: </strong> {props.escritorio} </p>
            <p> <strong> Peso: </strong> {props.peso} </p>
            <div className='moreBtn'><a href={props.link}  target='_blank'> <p> Más información </p></a> </div>
        </div>
    );
};

export default card; 