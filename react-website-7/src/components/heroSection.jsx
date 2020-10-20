import React from 'react'
import { Link } from 'react-router-dom'
import "./heroSection.css"
import img1 from "./images/img-1.jpg"
import img2 from "./images/img-2.jpg"
import img3 from "./images/img-3.jpg"

export default function HeroSection() {
    return (
        <div className="container">
            <div className="cards">
                <div className="card">
                    <div className="card-header">
                        <Link className="pic">
                            <img src={img1} alt="film"/>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h2>The Mantrix</h2>
                        <p className="turquoise">Take the green pill to get into the zone </p>
                    </div>
                    <div className="card-footer">
                        <Link className="link">Watch Now</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <Link className="pic">
                            <img src={img2} alt="film"/>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h2>Slow and Chill</h2>
                        <p className="red">Take the red pill to get into the zone </p>
                    </div>
                    <div className="card-footer">
                        <Link className="link">Watch Now</Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        <Link className="pic">
                            <img src={img3} alt="film"/>
                        </Link>
                    </div>
                    <div className="card-body">
                        <h2>The mountback</h2>
                        <p className="orange">Take the orange pill to get into the zone </p>
                    </div>
                    <div className="card-footer">
                        <Link className="link">Watch Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
