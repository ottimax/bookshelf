import React from 'react'
import { Link } from 'react-router-dom'

// IMPORT CSS
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="social-footer">
                <a href="https://www.facebook.com/peppe.bianchino"><img src={require("../img/facebook.png")} alt="facebook-logo" /></a>
                <a href="https://www.instagram.com/peppe_bianchino"><img src={require("../img/instagram.png")} alt="instagram-logo" /></a>
                <a href="https://github.com/ottimax/"><img src={require("../img/github.png")} alt="github-logo" /></a>
            </div>
            <h5>Copiright-2020 Giuseppe Bianchino</h5>
        </footer>
    )
}
