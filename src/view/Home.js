import React from 'react';


import { API_KEY } from '../global'

// IMPORT CSS
import './Home.css';

export default function home() {

    console.log(API_KEY);


    return (
        <div className="home">
            <h1>Benvenuto !</h1>
            <h3>Bookshelf offre un servizio di ricerca dei libri negli archivi di Google. <br /> Tramite la barra di ricerca in alto, è possibile ricercare dei libri in base al'opzione selezionata. </h3>
        </div>
    )
}
