import React from 'react'
import { Link } from 'react-router-dom'
import "./heroSection.css"

export default function HeroSection() {
    return (
        <div className="container">
            <div className="theme">Try something new</div>
            <div className="ft-link"><Link className="book-table">Book a Table</Link></div>
            <div className="last-link"><Link className="view-menu">View our Menu</Link></div>
        </div>
    )
}
