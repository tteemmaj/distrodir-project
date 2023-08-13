import React from 'react';
import styles from '../for-old-pc/forOldPc.css';
import Card from '../cards/card';

function ForOldPC (props) {
    return(
        <>
            <div className='mainListDistrosHome forOldPC'>
                <div className='listDistrosHome'> <h1> {props.titlePage} </h1> </div>
                <div className='listDistrosCards'>
                    <Card
                        image='mxlinux' 
                        nombre='MX Linux'
                        basado='Debian, Ubuntu'
                        arquitectura='X86 - X64'
                        escritorio='XFCE, lxde'
                        peso='1.9GB'
                        link='https://bard.google.com/'
                    />
                    <Card
                        image='endeavouros' 
                        nombre='Endeavour OS'
                        basado='Arch'
                        arquitectura='X86 - X64'
                        escritorio='Budgie, Cinnamon, GNOME'
                        peso='1.9GB'
                        link='https://bard.google.com/'
                    />
                    <Card
                        image='mxlinux' 
                        nombre='Zorin OS'
                        basado='Debian, Ubuntu'
                        arquitectura='X86 - X64'
                        escritorio='GNOME, Xfce'
                        peso='2.9GB'
                        link='https://bard.google.com/'
                    />
                    
                    
                    


                </div>
                <div className='listDistrosMoreBtn'>
                    <button>Ver más</button>
                </div>
            </div>
        </>
    );
};

export default ForOldPC;