import React from 'react'
import './Detail.css'
import image from './Images/night_mode_photography_1__q70ptc5ot9u2_large_2x.jpeg'
function Detail() {
    return (
        <>
            <div className="test-container">
                <div className="row">
                    <div className="col-6">
                        <div className="image">
                            <img src={image} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <h1 className="detail-text">Bring on the night.</h1>
                        <p className="detail-title">iPhone 13 Pro was made for low light. The Wide camera adds a wider aperture and our largest sensor yet — and it leverages the LiDAR Scanner for Night mode portraits. Ultra Wide gets a wider aperture, a faster sensor, and all-new autofocus. And Telephoto now has Night mode.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
