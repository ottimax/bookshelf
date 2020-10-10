import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Lodash from 'lodash';

// IMPORT CSS
import './Book.css'

// IMPORT SECRET API KEY
import { API_KEY as apiKey } from '../global'

export default function Book() {

    const [book, setBook] = useState({});
    const [message, setMessage] = useState("");

    const { id } = useParams();
    const api = `https://www.googleapis.com/books/v1/volumes?q=${id}&maxResults=40&key=${apiKey}`;

    async function getBook() {
        await Axios.get(api)
            .then(res => {
                if (res.data.totalItems > 0)
                    setBook(res.data.items[0]);
                else
                    setMessage("Impossibile trovare il libro selezionato");
            })
            .catch(err => { console.error(err); setMessage("Impossibile trovare il libro selezionato") })
    }

    useEffect(() => {
        getBook();
    }, {})


    console.log(book);

    // GET DATA FROM BOOK
    const thumbnail = Lodash.get(book, "volumeInfo.imageLinks.thumbnail", "https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg");
    const title = Lodash.get(book, "volumeInfo.title", "Titolo libro mancante");
    const description = Lodash.get(book, "volumeInfo.description", "Descrizione libro mancante");
    const author = Lodash.get(book, "volumeInfo.authors[0]", "Autore libro mancante");



    // CREATE ELEMENT TO RENDER
    const errorMessage = (
        <div className="error-div">
            <div className="error-div-content">
                <h1>{message}</h1>
            </div>
        </div>
    );


    let bookPage;
    if (book) {
        bookPage = (
            <div className="book-page">
                <div className="book-page-content">
                    <div className="thumbnail">
                        <img src={thumbnail} alt="" />
                        <h1>{title}</h1>
                        <h5>{author}</h5>
                    </div>
                    <h4>{description}</h4>
                </div>
            </div>
        );
    }



    // RENDER
    if (message)
        return (errorMessage);
    else {
        return (bookPage);
    }
}
