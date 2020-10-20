import React from 'react'
import Footer from '../footer'
import HeroSection from '../heroSection'

export default function Home() {
    return (
        <div>
            <HeroSection 
                title="Your Card Repairs" 
                slogan="Visit us for your service"
                rdv="Book Appointment" />
            <Footer 
                footerTitle1="Our Location"
                location="15 Street Suburt Country 6000"

                footerTitle2="Phone"
                phone="+237 670 39 85 825"

                footerTitle3="Email"
                email="Joelnoumbi28@gmail.com"
            />
        </div>
    )
}
