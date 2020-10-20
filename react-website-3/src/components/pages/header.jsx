import React from 'react'
import {Link} from "react-router-dom"
import {Button} from "../button"
import "../pages/header.css"

export default function Header() {
    return (
        <div>
            <header> 
                <div className="tshirt"><i className="fas fa-tshirt"></i></div>
                <div className="header-row">
                    <h1>Fashion Style</h1>
                    <Link className="btn-visit-us">
                        <Button buttonStyle="btn--primary" buttonSize="btn--large">Visit Us</Button>
                    </Link>
                </div>
                
            </header>
        </div>
    )
}
