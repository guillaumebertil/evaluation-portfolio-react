import { Link } from 'react-router-dom';
import { useState } from 'react';

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
            <Link className='navbar-brand text-light' to='/' onClick={closeMenu}>
                JOHN DOE
            </Link>

            {/* Menu burger */}
            <button className='navbar-toggler' type='button' onClick={toggleMenu} aria-controls='navbarNav' aria-expanded={isOpen} aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            {/* Menu de navigation */}
            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id='navbarNav'>
                <ul className='navbar-nav ms-auto text-uppercase'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link text-light' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-link text-light' onClick={closeMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/portfolio' className='nav-link text-light' onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-link text-light' onClick={closeMenu}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/legalNotice' className='nav-link text-light' onClick={closeMenu}>Mentions Légales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;