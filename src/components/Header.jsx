import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import '../styles/app.css';

function Header() {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            {/* Logo */}
            <NavLink className='navbar-brand text-light' to='/' onClick={closeMenu}>
                JOHN DOE
            </NavLink>

            {/* Menu burger */}
            <button className='navbar-toggler' type='button' onClick={toggleMenu} aria-controls='navbarNav' aria-expanded={isOpen} aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            {/* Menu de navigation */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'>
                <ul className='navbar-nav ms-auto text-uppercase'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link text-light' onClick={closeMenu}>Home</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/services' className='nav-link text-light' onClick={closeMenu}>Services</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/portfolio' className='nav-link text-light' onClick={closeMenu}>Portfolio</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link text-light' onClick={closeMenu}>Contact</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/legalNotice' className='nav-link text-light' onClick={closeMenu}>Mentions Légales</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;