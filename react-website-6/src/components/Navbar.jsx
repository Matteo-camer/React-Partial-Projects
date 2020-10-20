import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div>
            <div className="row-1">
                <div className="logo">Restaurant</div>
                <div className="call-us"><Link className="call-us-num">Call us on 08 200 4000</Link></div>
            </div>
            <div className="row-2">
                <ul>
                    <li className="active"><Link className="cloned-i">Home</Link></li>
                    <li><Link className="cloned">About Us</Link></li>
                    <li><Link className="cloned">Menu</Link></li>
                    <li><Link className="cloned">Contact Us</Link></li>
                    <li className="inactive"><Link className="cloned-f">Book a Table</Link></li>
                </ul>
            </div>
        </div>
    )
}
