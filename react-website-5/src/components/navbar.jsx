import React from 'react'
import {Link} from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="navbar-container">
            <div className="header-1">
                <div className="theme">
                    <i className="fas fa-newspaper" />
                    <span>The Daily Times</span> 
                </div>
                <div className="public-time">
                    <p> Saturday 4:00 pm 12/09/2020 </p>
                </div>
            </div>
            <nav className="header-2">
                <ul>
                    <li>
                        <Link to="#" className="link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="link">
                            Bussiness
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="link">
                            Technology
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="link">
                            Mining
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="link">
                            TV
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="link">
                            Comedy
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
