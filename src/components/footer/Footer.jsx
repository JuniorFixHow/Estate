import React from 'react'
import './footer.css';
import logo from '../../assets/logo.jpg'
import {MdEmail} from 'react-icons/md';
import {BsTelephoneFill, BsTelephoneForwardFill, BsFillInfoCircleFill} from 'react-icons/bs';
import {AiFillHome} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="line"></div>
            <div className="main__container">
                <div className="top">
                    <div className="tleft">
                        <Link to='/'>
                        <div className="tleft__top" >
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <h3>DM Properties</h3>
                        </div>
                        </Link>
                        <h5>
                            P. O. Box AN 18932 <br/>
                            Accra North, Ghana <br/>
                            Location: Ashaley Botwe - <br/>
                            Nmai-Dzorn Rd                        
                        </h5>
                    </div>

                    <div className="tright">
                        <div className="container">
                            <Link to='/contact'>
                                <MdEmail className='phone' />
                            </Link>
                            <div className="texts">
                                <h5>Send us an email</h5>
                                <h3>dmpropertiesltd@outlook.com</h3>
                            </div>
                        </div>
                        <div className="container">
                            <a href="tel:+233 302 552 176"><BsTelephoneFill className='phone' /></a>
                            <div className="texts">
                                <h5>Give us a call</h5>
                                <h3>+233 302 552 176</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <Link to='/'>
                        <div   className="link">
                            <AiFillHome className='icon' />
                            <h4>Home |</h4>
                        </div>
                    </Link>
                    <Link to='/contact'>
                        <div   className="link">
                            <BsTelephoneForwardFill className='icon' />
                            <h4>Contact Us |</h4>
                        </div>
                    </Link>

                    <Link to='/about'>
                        <div className="link">
                            <BsFillInfoCircleFill className='icon' />
                            <h4>About Us |</h4>
                        </div>
                    </Link>
                    
                </div>
                <div className="down">
                    <h5>&copy; DM Properties @ 2022</h5>
                    <h6>Powered by JuniorFixHow</h6> 
                </div>
            </div>
        </footer>
    )
}

export default Footer
