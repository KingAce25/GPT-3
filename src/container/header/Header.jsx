import React from 'react'
import Logo from '../../assets/logo.svg'
import './header.css'
import Dropdown from './Dropdown'

const Header = () => {
    return (
        <div className='header section__padding'>
            <div className='header__left'>
                <div className="header__logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="header__links">
                    <a href="#hero">Home</a>
                    <a href="#first__page">What is GPT-3?</a>
                    <a href="#second__page">Open Ai</a>
                    <a href="#third__page">Case Studies</a>
                    <a href="#fourth__page">Libraries</a>
                </div>
            </div>
            <div className="header__right">
                <button id='signup'>Sign Up</button>
                <button id='signin'>Sign in</button>
            </div>
            <div className="response">
                <Dropdown />
            </div>
        </div>
    )
}

export default Header
