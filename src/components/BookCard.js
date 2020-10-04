import React from 'react'
import Lodash from 'lodash'

// IMPORT MATERIAL COMPONENT
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core'

// IMPORT CSS
import './BookCard.css'


export default function BookCard(props) {

    const book = props.book;
    const id = book.id;
    const description = Lodash.get(book, "volumeInfo.description", "Descrizione del lbro"); ;
    const authors = Lodash.get(book,"volumeInfo.authors[0]", "Autore del libro");
    const thumbnail = Lodash.get(book, "volumeInfo.imageLinks.thumbnail","https://img.pixers.pics/pho_wat(s3:700/FO/61/20/32/26/700_FO61203226_77a222434a35b86c88c301fd830be805.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/adesivi-illustrazione-vettoriale-di-cartoon-verme-libro.jpg.jpg");
    const title = Lodash.get(book, "volumeInfo.title", "Titolo libro");

    console.log(`Id: ${id}, Authors: ${authors}, thumbnail: ${thumbnail}, Title: ${title}`)

    return (
        <div className="book">
           <Link href={`/book/${id}`}><img src={thumbnail} alt=""/></Link>
            <p>{title}</p>
           <Button href={`/book/${id}`} ssize="small" color="primary" >Scopri</Button>
        </div>
    )
}
