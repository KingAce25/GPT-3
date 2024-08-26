import React, { useState } from 'react';
import './dropdown.css';
import Hamburger from '../../assets/burger-menu-svgrepo-com.svg'
import Close from '../../assets/close-1511-svgrepo-com.svg'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>

                <div className="menu-btn__burger">
                    {
                        menuOpen ? <img src={Close} alt='' onClick={() => setMenuOpen(true)} /> : <img src={Hamburger} alt='' onClick={() => setMenuOpen(false)} />
                    }

                </div>
                {/* <img src={Hamburger} /> */}
            </div>


            {
                menuOpen && (
                    <div id="dropdown-menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="#first__page">What is GPT-3?</a></li>
                            <li><a href="#second__page">Open Ai</a></li>
                            <li><a href="#third__page">Case Studies</a></li>
                            <li><a href="#fourth__page">Library</a></li>
                            <li>
                                <div id="drop">
                                    <button id='signin'>Sign in</button>
                                    <button id='signup'>Sign up</button>
                                </div>
                            </li>
                        </ul>
                    </div >
                )
            }

        </div >
    );
};

export default Menu;
