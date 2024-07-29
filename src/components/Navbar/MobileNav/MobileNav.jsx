import React from 'react';
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>        
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}
             onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
                <img className='logo' src='../../assets/k24.svg' alt='logoH' />

                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>

                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact me</a>
                    </li>
                    <li>
                        <a className='menu-item'>Little challenge</a>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>Hire Me</button>
                </ul>
            </div>    
        </div>
        </>

    )
}
    export default MobileNav;