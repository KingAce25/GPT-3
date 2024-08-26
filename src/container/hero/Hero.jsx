import React from 'react'
import People from '../../assets/people.png'
import Ai from '../../assets/ai.png'
import Google from '../../assets/google.png'
import Slack from '../../assets/slack.png'
import Atlassian from '../../assets/atlassian.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero section__padding' id='hero'>
      <div className="hero__top">
      <div className="hero__left">
        <div className="hero__text">
            <h1 className=' build background'><b>Let's Build Something amazing with GPT-3 OpenAi</b></h1>
            <p id='yet'>Yet bed any for traveling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        </div>
        <div className="hero__input">
            <input type="email" placeholder='Your Email Address'/>
            <button>Get Started</button>
        </div>
        <div className="hero__people">
            <img src={People} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="hero__right">
        <img src={Ai} alt="" className='rotate-scale-up-animation'/>
      </div>
      </div>
      <div className="hero__down">
        <img src={Google} alt="" />
        <img src={Slack} alt="" />
        <img src={Atlassian}alt="" />
        <img src={Dropbox} alt="" />
        <img src={Shopify} alt="" />
      </div>
    </div>
  )
}

export default Hero
