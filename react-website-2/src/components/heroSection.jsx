import React from 'react'
import { Link } from 'react-router-dom'
import "./heroSection.css"
import {Button} from "./button"

export default function HeroSection({title, slogan, rdv}) {
    return (
        <div className="container-hs">
            <h1 className="title">{title}</h1>
            <p className="slogan">{slogan}</p>
            <Link to="/" className="rdv-button">
                <Button buttonStyle="btn--primary" buttonSize="btn--large">{rdv}</Button>            
            </Link>
        </div>
    )
}
