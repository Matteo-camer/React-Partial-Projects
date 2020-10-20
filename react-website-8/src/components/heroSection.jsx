import React from 'react'
import { Link } from 'react-router-dom'
import "./heroSection.css"

export default function HeroSection() {
    return (
        <div className="container">
            <Link to="#" className="logo">
                <i className="fas fa-city"></i>
            </Link>
            <div className="title">
                <h1>Visit New York</h1>
            </div>
            <div className="subtitle">
                <h3>Express yourself and explore</h3>
            </div>
        </div>
    )
}
