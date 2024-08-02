import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return(
        <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src={require('../assets/programming.png')} alt='img' />

                <ul>
                    <li>
                        <Link className='menu-item' to='/Home'>Home</Link>
                    </li>
                    <li>
                        <Link className='menu-item' to='/Skills'>Skills</Link>
                    </li>
                    <li>
                        <Link className='menu-item' to='/Contact'>Contact me</Link>
                    </li>
                    <li>
                        <Link className='menu-item' to='/Game'>Little challenge</Link>
                    </li>

                    <button className='contact-btn' onClick={() => {}}>
                    Hire me
                    </button>
                </ul>
                    <button className='menu-btn' onClick={toggleMenu}>
                    <span
                    src={require('../assets/Hmenu.png')}
                    class={"material-symbols-outlined"}
                    style={{fontSize: "1.8rem" }}
                    >
                        {openMenu ? "" : ""}
                        
                    </span>
                    </button>
                
            </div>
        </nav>
        </>
    )
} 

export default Navbar;
