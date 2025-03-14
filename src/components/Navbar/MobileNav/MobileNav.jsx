import React from 'react';
import './MobileNav.css';

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
        <>        
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}
             onClick={toggleMenu}
        >
            <div className="mobile-menu-container">
            <img className='logo' src={require('../../assets/programming.png')} alt='img' />

                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>

                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contacto</a>
                    </li>
                </ul>
            </div>    
        </div>
        </>

    )
}
    export default MobileNav;