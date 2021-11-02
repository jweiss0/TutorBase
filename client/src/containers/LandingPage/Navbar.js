import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    // useEffect(() => { showButton();}, []);

    // window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TutorBase <i className="fab fa-typo3" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item active'>
                            <a className = "nav-links" href ="#hero-area">
                                Home
                            </a>
                        </li>
                        <li className='nav-item active'>
                            <a className = "nav-links" href ="#services">
                                Services
                            </a>
                        </li>
                        <li className='nav-item active'>
                            <a className = "nav-links" href ="#team">
                                Team
                            </a>
                        </li>
                        <li className='nav-item active'>
                            <a className = "nav-links" href ="#contact">
                                Contact
                            </a>
                        </li>
                        <li className='nav-item active'>
                            <a className = "nav-links" href ="/login">
                                Log In
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Log In</Button>}

                </div>
            </nav>
        </>
    );
}

export default Navbar
