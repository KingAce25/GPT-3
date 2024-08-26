import React from 'react'
import Code from '../../assets/blog01.png'
import Face from '../../assets/blog02.png'
import Chain from '../../assets/blog03.png'
import Bin from '../../assets/blog04.png'
import Caut from '../../assets/blog05.png'
import './fourthpage.css'

const Fourthpage = () => {
    return (
        <div className='fourth__page section__padding' id='fourth__page'>
            <div className="fourth__header">
                <h1 className='background'><b>A lot is happening,<br />We are blogging about it.</b></h1>
            </div>
            <div className="fourth__footer">
                <div className="fourth__left">
                    <div className="left__img">
                        <img src={Code} alt="" id='code' />
                    </div>
                    <div className="left__top-text">
                        <p id='date'>Sept 26, 2021</p>
                        <h4 id='pp'>GPT-3 and Open Ai is the future. Let us explore how it is?</h4>
                    </div>
                    <div className="left__down"><p id='hhs' className='hh'>Read full Article</p></div>
                </div>
                <div className="fourth__right">
                    <div className="fourth__right-one">
                        <div id="one">
                            <div className="right__img">
                                <img src={Face} alt="" id='face'/>
                            </div>
                            <div className="right__top-text">
                                <p id='date'>Sept 26, 2021</p>
                                <h4 id='pp'>GPT-3 and Open Ai is the future. Let us explore how it is?</h4>
                            </div>
                            <div className="right__down"><p id='hh'>Read full Article</p>
                            </div>
                        </div>

                        <div id="two">
                            <div className="right__img">
                                <img src={Chain} alt="" id='face'/>
                            </div>
                            <div className="right__top-text">
                                <p id='date'>Sept 26, 2021</p>
                                <h4 id='pp'>GPT-3 and Open Ai is the future. Let us explore how it is?</h4>
                            </div>
                            <div className="right__down"><p id='hh'>Read full Article</p>
                            </div>
                        </div>
                    </div>
                    <div className="fourth__right-two">
                        <div id="three">
                            <div className="right__img">
                                <img src={Bin} alt="" id='face'/>
                            </div>
                            <div className="right__top-text">
                                <p id='date'>Sept 26, 2021</p>
                                <h4 id='pp'>GPT-3 and Open Ai is the future. Let us explore how it is?</h4>
                            </div>
                            <div className="right__down"><p id='hh'>Read full Article</p>
                            </div>
                        </div>

                        <div id="four">
                            <div className="right__img">
                                <img src={Caut} alt="" id='face'/>
                            </div>
                            <div className="right__top-text">
                                <p id='date'>Sept 26, 2021</p>
                                <h4 id='pp'>GPT-3 and Open Ai is the future. Let us explore how it is?</h4>
                            </div>
                            <div className="right__down"><p id='hh'>Read full Article</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Fourthpage