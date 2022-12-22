import React from 'react';
import {Link} from 'react-router-dom';


export default function LandingPage(){
    return(
        <div>
            <h1>BIENVENIDOS AL MUNDO POKEMON</h1>
            <Link to='/home'>
                <button>INGRESAR</button>
                </Link>                                       
        </div>
    )
}