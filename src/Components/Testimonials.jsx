import React, { useRef } from 'react'
import './Testimonials.css'
import nexticon from '../assets/next-icon.png'
import backicon from '../assets/back-icon.png'
import user1 from '../assets/user-1.png'
import user2 from '../assets/user-2.png'
import user3 from '../assets/user-3.png'
import user4 from '../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx=0;

const slideforward = ()=>{
    if (tx > -50) {
        tx -=25;
    }
    slider.current.style.transform= `translatex(${tx}%)`;
}
const slidebackward = ()=>{
    if (tx < 0) {
        tx +=25;
    }
    slider.current.style.transform= `translatex(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src={nexticon} alt=""  className='next-btn'onClick={slideforward}/>
        <img src={backicon} alt=""  className='back-btn'onClick={slidebackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Willion Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci a ipsam velit corporis eos nihil laboriosam iste cum? Aut.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user2} alt="" />
                            <div>
                                <h3>Willion Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci a ipsam velit corporis eos nihil laboriosam iste cum? Aut.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user3} alt="" />
                            <div>
                                <h3>Willion Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci a ipsam velit corporis eos nihil laboriosam iste cum? Aut.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="userinfo">
                            <img src={user4} alt="" />
                            <div>
                                <h3>Willion Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id adipisci a ipsam velit corporis eos nihil laboriosam iste cum? Aut.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials