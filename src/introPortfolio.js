import React from 'react';
import './introPortfolio.css';
import image from "./about.png"; 

function introPortfolio() {
    return (
        <div className="intro-container">
            <div className="card">
                <div className="description">
                    About Me
                </div>
                <div className="content">
                    <img src={image} alt="about" className="imageProp" />
                    <div className="text">
                        {"Hey, I'm Soham Sarkar, a Junior from RCC Institute of Information Technology, pursuing B.Tech in Computer Science."}
                        <br/>
                        <br/>
                        {"I learn by implementing and love to explore new technologies."}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default introPortfolio;