import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            {/* Logo */}
            <Link className='navbar-brand text-light' to='/'>JOHN DOE</Link>

            {/* Menu burger */}
            <button className='navbar-toggler bg-dark' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
                <span className='navbar-toggler-icon'></span>
            </button>

            {/* Menu de navigation */}
            <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                <ul className='navbar-nav text-uppercase'>
                    <li className='nav-item'>
                        <Link className='nav-link text-light' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-light' to='/services'>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-light' to='/portfolio'>Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-light' to='/contact'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link text-light' to='/legalNotice'>Mentions Légales</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;