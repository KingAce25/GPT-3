import React from 'react'
import Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer section__padding'>
            <div className="footer__top">
                <h2 className='background'>Do you want to step in to the <br />future before others</h2>
                <button>Request Early Access</button>
            </div>
            <div className="footer__middle">
                <div className="down__left">
                    <img src={Logo} alt="" />
                    <p>Crechterwoord K12 182 DK<br /> Alknjkcb, All Rights Reserved</p>
                </div>
                <div className="down__right">
                    <div className="footer__links">
                        <h6><b>Links</b></h6>
                        <p>Overons</p>
                        <p>Social Media</p>
                        <p>Counters</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer__links">
                        <h6><b>Company</b></h6>
                        <p>Privacy Policy</p>
                        <p>Social Media</p>
                        <p>Contact</p>
                    </div>
                    <div className="footer__links">
                        <h6><b>Get in touch</b></h6>
                        <p>Crechterwoord K12 182 DK Alknjkcb</p>
                        <p>085-132567</p>
                        <p>info@payme.net</p>
                    </div>
                </div>
            </div>
            <div className="footer__down">
                <p>© 2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
