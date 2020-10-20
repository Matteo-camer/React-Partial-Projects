import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="container">
            <div className="logo"><i className="fas fa-car" /> Automotive</div>
            <nav className="routes">
                <Link to="/" className="nav-item">
                    Home
                </Link>
                <Link to="/" className="nav-item">
                    Features
                </Link>
                <Link to="/" className="nav-item">
                    Price
                </Link>
                <Link to="/" className="nav-item">
                    Contact
                </Link>
                <Link to="/" className="nav-item active">
                    Book Appointment
                </Link>
            </nav>
        </div>
    )
}
