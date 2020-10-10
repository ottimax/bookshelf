import React from 'react';
import Footer from '../components/Footer';


import { API_KEY } from '../global'

// IMPORT CSS
import './Home.css';

export default function home() {

    console.log(API_KEY);


    return (
        <div className="home">
            <div className="home-content">
                <h1>Benvenuto!</h1>
                <h2>Bookshelf è una pagina dedicata a tutti i lettori, se sei alla ricerca di un libro questo è il sito adatto a te </h2>
            </div>

        </div>
    )
}
