import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Portfolio | Pablo Cristini</h2>
                <p>"¡Bienvenido a mi portafolio! Soy Pablo Cristini, actualmente estudio programación y me dedico a ampliar mis conocimientos en desarrollo de software."</p>
                <div className="tech-icons-container">
                    <div className="tech-icon">
                        <img src={require('../assets/html.png')} alt="html logo"/> 
                    </div>
                    <div className="tech-icon">
                        <img src={require('../assets/css-3.png')} alt="css logo"/> 
                    </div>
                    <div className="tech-icon">
                        <img src={require('../assets/js.png')} alt="js logo"/> 
                    </div>
                    <div className="tech-icon">
                        <img src={require('../assets/atom.png')} alt="react logo"/> 
                    </div>
                    <div className="tech-icon">
                        <img src={require('../assets/typescript.png')} alt="ts logo"/> 
                    </div>
                    <div className="tech-icon">
                        <img src={require('../assets/database-storage.png')} alt="db logo"/> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;