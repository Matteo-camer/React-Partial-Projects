import React from 'react'
import "./heroSection.css"
import man from "./images/man.jpg"

export default function HeroSection() {
    return (
        <div className="container">
            <div className="part-1">
                <div className="box-top">
                    <div className="logo">
                        <i className="fas fa-balance-scale-right" />
                    </div>
                    <div className="header-theme">
                        <h1>Legal Legal</h1>
                        <h3>All your legal advice</h3>
                    </div>
                </div>
                 <div className="box family">
                    <div className="container-box">
                        <h2>Family Law</h2>
                        <p>Help with issues</p>
                    </div>
                    <div className="chevron-right">
                        <i className="fas fa-chevron-right" />
                    </div>
                </div>
                <div className="box ip">
                    <div className="container-box">
                        <h2>IP Law</h2>
                        <p>Help with technology</p>
                    </div>
                    <div className="chevron-right">
                        <i className="fas fa-chevron-right" />
                    </div>
                </div>
                <div className="box contract">
                    <div className="container-box">
                        <h2>Contract Law</h2>
                        <p>Help with paperwork</p>
                    </div>
                    <div className="chevron-right">
                        <i className="fas fa-chevron-right" />
                    </div>
                </div>
            </div>

            <div className="part-2">
                <img src={man} alt="man costum"/>
            </div>
        </div>
    )
}
