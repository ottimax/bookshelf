import Axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'


// IMPORT SECRET API KEY
import { API_KEY as apiKey } from '../global'


// IMPORT COMPONENTS
import { Grid } from '@material-ui/core';
import BookCard from '../components/BookCard';
import Center from 'react-center'

// IMPORT CSS
import './books.css'


export default function Books() {

    const [books, setBooks] = useState([]);
    const [message, setMessage] = useState("");

    async function getBooks() {
        const res = await Axios.get(api)
            .then(res => {
                if (res.data.totalItems > 0)
                    setBooks(res.data.items);
                else
                    setMessage("Nessun risultato trovato");

            })
            .catch(err => { console.error(err); setMessage("Nessun risultato trovato") })
    }
    useEffect(() => {
        getBooks();
    }, [])

    // GET THE PARAMS FROM URL
    const query = new URLSearchParams(useLocation().search);
    const search = query.get("search");

    const api = `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=40&key=${apiKey}`;



    // CREATE ELEMENT TO RENDER
    let booksCard
    if (books) {
        booksCard = books.map(book => {
            return (
                <Grid item key={book.id} style={{ marginTop: "40px", padding: "0 80px 0 80px" }}>
                    <BookCard book={book} />
                </Grid>
            );
        });
    }

    const errorMessage = (
        <div className="error-div">
            <p>{message}</p>
        </div>
    );




    // RENDER
    if (message) {
        return (errorMessage);
    }
    else if(books){
        return (
            <Grid container direction="row" justify="center" alignItems="center" wrap="wrap" style={{ margin: "120px 0 120px" }}>
                {booksCard}
            </Grid>
        )
    }
}
