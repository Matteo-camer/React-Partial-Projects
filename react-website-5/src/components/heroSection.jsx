import React from 'react'
import "./heroSection.css"
import img1 from "./images/img-1.png"
import img2 from "./images/img-2.png"
import img3 from "./images/img-3.png"

export default function HeroSection() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3>This is a Headline</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum harum, veritatis aut, ratione laborum quibusdam expedita magnam laboriosam corrupti sint, animi natus adipisci earum voluptates id perspiciatis incidunt error assumenda. </p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ut aspernatur, dolorum explicabo sed odio cum nisi quasi ad iusto. </p>
                    <figure>
                        <img src={img1} alt="NYC"/>
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quo. </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 middle">
                    <h3>This is a Headline</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cum deserunt, sed incidunt aperiam atque quisquam nostrum necessitatibus minima fuga explicabo cupiditate dignissimos nesciunt, recusandae eveniet beatae in eligendi facilis! </p>
                    <figure>
                        <img src={img2} alt="NYC" style={{width: "300px"}} />
                    </figure>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam totam repudiandae blanditiis porro consectetur labore velit mollitia quae consequuntur nostrum? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis iusto totam hic mollitia ab. Quo, ex? Aliquam corrupti dicta totam, est officiis ducimus eaque excepturi? </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <h3>Recent Photo</h3>
                    <figure>
                        <img src={img3} alt="NYC" style={{height: "500px"}} />
                    </figure>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quibusdam qui aliquam deleniti expedita modi, fugiat odio. </p>
                </div>
            </div>
        </div>
    )
}
