import React, { useState } from 'react'

// IMPORT CSS
import './AppBar.css'


// IMPORT MATERIAL-UI COMPONENT AND ICON
import { Button, FormControl, FormLabel, InputBase, InputLabel, NativeSelect, Toolbar, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';


export default function AppBar() {

    const [toSearch, setToSearch] = useState("");
    const [type, setType] = useState("Autore")

    function andleSearch(event) {
        setToSearch(event.target.value);
    }

    function andleType(event) {
        setType(event.target.value)
    }


    return (
        <div className="header">
            <Toolbar className="toolbar">
                <div className="home-div"><Link to="/"><HomeIcon className="home-icon" fontSize="large" /></Link></div>
                <div className="toolbar-content">
                    <SearchIcon className="search-icon" fontSize="large" />
                    <form action={`/books`} method="GET">
                        <InputBase  className="input" type="text" name="search" placeholder="Cerca Libro" onChange={andleSearch} required={true}/>
                        <Button type="submit" className="input-button" variant="contained">
                            Cerca
                    </Button>
                    </form>
                </div>
            </Toolbar>
        </div>
    )
}
