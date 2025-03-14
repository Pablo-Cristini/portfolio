import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src={require('../assets/programming.png')} alt='img' />
                <ul>
                    <li>
                        <Link className='menu-item' to='/Game'>Desafío</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 

export default Navbar;
