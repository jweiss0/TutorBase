import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        }
        else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-logo' onClick={closeMobileMenu}>
                        TutorBase 
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a className = "nav-links" href ="#home-area" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className = "nav-links" href ="#services-area" onClick={closeMobileMenu}>
                                Services
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a className = "nav-links" href ="#about-area" onClick={closeMobileMenu}>
                                Team
                            </a>
                        </li>
                         <li>
                            <a className = "nav-links-mobile" href ="/login" onClick={closeMobileMenu}>
                                Log In
                            </a>
                        </li> 
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>LOG IN</Button>
                    }

                </div>
            </nav>
        </>
    );
}

export default Navbar
