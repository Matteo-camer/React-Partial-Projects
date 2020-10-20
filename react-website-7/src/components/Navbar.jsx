import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="header">
            <div className="view-all">
                <Link className="link-1">View All</Link>
            </div>
            <div className="theme">
                <h2>Net Stream</h2>
            </div>
            <div className="subscribe">
                <Link className="link-2">Subscribe</Link>
            </div>
        </div>
    )
}
