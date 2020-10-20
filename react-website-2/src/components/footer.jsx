import React from 'react'
import "./footer.css"

export default function Footer({footerTitle1, footerTitle2, footerTitle3, location, phone, email}) {
    return (
        <div className="footer">
            <div className="footer-item">
                <p>{footerTitle1}</p>
                <p>{location}</p>
            </div>
            <div className="footer-item">
                <p>{footerTitle2}</p>
                <p>{phone}</p>
            </div>
            <div className="footer-item">
                <p>{footerTitle3}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
