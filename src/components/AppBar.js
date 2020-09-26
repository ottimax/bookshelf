import React from 'react'

// IMPORT CSS
import './AppBar.css'


// IMPORT MATERIAL-UI COMPONENT AND ICON
import { Button, InputBase, Toolbar, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';


export default function AppBar() {
    return (
        <div>
            <Toolbar className="toolbar">
                <div className="toolbar-content">
                    <SearchIcon className="search-icon" fontSize="large" />
                    <InputBase className="input" placeholder="Cerca Libro" />
                    <Button className="input-button" variant="contained" color="rgb(24, 64, 87)" href="">
                        Cerca
                    </Button>
                </div>
            </Toolbar>
        </div>
    )
}
