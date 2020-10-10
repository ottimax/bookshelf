import React from 'react'
import Lodash from 'lodash'

// IMPORT MATERIAL COMPONENT
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core'

// IMPORT CSS
import './BookCard.css'


export default function BookCard(props) {

    const book = props.book;
    const id = book.id;
    const thumbnail = Lodash.get(book, "volumeInfo.imageLinks.thumbnail", "https://media.wired.com/photos/5be4cd03db23f3775e466767/125:94/w_2375,h_1786,c_limit/books-521812297.jpg");
    const title = Lodash.get(book, "volumeInfo.title", "Titolo libro");


    return (
        <div className="bookcard">
            <h3>{title}</h3>
            <Link className="bookcard-link" href={`/book/${id}`}><img src={thumbnail} alt="" /></Link>
        </div>
    )
}
