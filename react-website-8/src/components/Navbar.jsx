import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="header">
            <div className="fst-link">
                <Link to="#" className="explore">Explore</Link>
            </div>
            <div className="list-menu">
                <ul>
                    <li><Link to="#" className="list-item">Home</Link></li>
                    <li><Link to="#" className="list-item">Places</Link></li>
                    <li><Link to="#" className="list-item">Video</Link></li>
                    <li><Link to="#" className="list-item">Locations</Link></li>
                    <li><Link to="#" className="list-item">About</Link></li>
                    <li><Link to="#" className="list-item">Book</Link></li>
                    <li><Link to="#" className="list-item">Photos</Link></li>
                </ul>
            </div>
            <div className="lst-link">
                <Link to="#" className="learn-more">Learn More</Link>
            </div>
        </div>
    )
}
