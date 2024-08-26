import React from 'react'
import Three from '../../assets/possibility.png'
import './thirdpage.css'

const Thirdpage = () => {
    return (
        <div className='third__page section__padding' id='third__page'>
            <div className="third__top">
                <div className="third__left">
                    <img src={Three} alt="" />
                </div>
                <div className="third__right">
                    <p id='request'>Request Early Access to Get Started</p>
                    <h3 className='background'>The possibilities are<br/> beyond your imagination</h3>
                    <p id='request'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                    <p id='early' className='background'>Request Early Access to Get Started</p>
                </div>
            </div>
            <div className="third__down">
                <div className="request">
                    <p id='black'>Request Early Access to Get Started</p>
                    <h5 id='reg'>Register today & start exploring the endless possibilities</h5>
                </div>
                <div className="register">
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Thirdpage