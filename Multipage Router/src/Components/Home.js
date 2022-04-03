import React from 'react'
import './Home.css'
import image from './Images/Apple-iPhone13-Pro-alpine-green-hero-2up-220308_big_carousel.jpg.large.jpg'
function Home() {
    return (
        <>
            <div className="Container">
                <div className="Row">
                    <h1 className="header-text">IPhone 13 Pro</h1>
                    <p>Oh.So.Pro</p>
                    <div className="image">
                        <img src={image} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
