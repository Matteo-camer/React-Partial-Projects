import React from 'react'
import "../components/heroSection.css"
import image1 from "../img-1.jpg"
import image2 from "../img-2.jpg"
import {Button} from "../components/button"

export default function HeroSection() {
    return (
        <div className="container">
            <div className="first-part">
                <h1>Our New Clothing Line</h1>
                <p className="dsign-today">View 2020 Designs Today</p>
                <div className="img-2-container">
                    <img src={image2} className="image-2" alt="clothing2"/>
                </div>
            </div>
            <div className="second-part">
                <div className="img-1-container">
                    <img src={image1} className="image-1" alt="clothing2"/>
                </div>
                <div className="shop-btn">
                    <Button buttonStyle="btn--primary" buttonSize="btn--large">Shop Now</Button>
                </div>
            </div>
        </div>
    )
}
