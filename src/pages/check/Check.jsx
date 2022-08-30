import React from 'react'
import Header from '../../components/header/Header';
import "./check.css";
import {Estates} from "../../components/dummy/imageData";
import {RiWhatsappFill} from "react-icons/ri";

const Check = () => {
  return (
    <div className='check'>
        <Header/>
        <div className="container">
            <div className="top">
                <div className="left">
                    <div className="image__container">
                        <h2>{Estates[0].title}</h2>
                        <img src={Estates[0].image} alt="" />
                        <h4>{Estates[0].name}</h4>
                    </div>
                    <div className="other__details">
                        <h3>Price: {Estates[0].price}</h3>
                        <h3>Location: {Estates[0].city}</h3>
                        <h3>Address: {Estates[0].address}</h3>
                    </div>
                    <div className="desc">
                        <h4>{Estates[0].desc}</h4>
                    </div>
                </div>
                <div className="right">
                    <div className="message__header">
                        <div className="image__circle">
                            <img src={Estates[0].image} alt="" />
                        </div>
                        <h2>Get in touch with us</h2>
                    </div>
                    <div className="message__body">
                        <input type="text" placeholder='Enter email address' />
                        <input type="text" placeholder='Message subject' />
                        <textarea placeholder='Message body' className='message__content' cols="30" rows="5"/>
                        <button>Send</button>
                    </div>
                    <div className="icons">
                        <RiWhatsappFill/>
                    </div>
                </div>
            </div>
            <div className="down">
                down
            </div>
        </div>
    </div>
  )
}

export default Check