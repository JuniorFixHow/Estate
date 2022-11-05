import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/header/Header';
import "./check.css";
import {Estates} from "../../components/dummy/imageData";
import {BsFacebook, BsTwitter, BsFillTelephoneFill, BsWhatsapp} from "react-icons/bs";
import emailjs from 'emailjs-com';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import about from '../../assets/manager.jpg';

const Check = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k2f8v0l', 'template_tdf3lfq', e.target, 'xGLqC9hWOuCrN6_pk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    const {Id} = useParams();
    const [myestates, setMyEstates] = useState([]);
    const [currentImage, setCurrentImage] = useState(undefined);
    const fetchData=()=>fetch(`/estates/${Id}`).then(res=>res.json());
    useEffect(()=>{
        fetchData().then(data=>{
            setMyEstates(data);
        })
    }, []);

console.log(currentImage)
  return (
    <div className='check'>
        <Header/>
        <div className="container">
            <div className="top">
                <div className="left">
                    <div className="image__container">
                        <h2>{myestates.name}</h2>
                        <img src={myestates?.photos?.[0]} alt="" />
                        {/* <h4>{Estates[0].name}</h4> */}
                    </div>
                    <div className="other__details">
                        <h3>Price: {myestates.price}</h3>
                        <h3>Location: {myestates.city}</h3>
                        <h3>Address: {myestates.address}</h3>
                    </div>
                    <div className="desc">
                        <h4>{myestates.desc}</h4>
                    </div>
                </div>
                <div className="right">
                    <div className="message__header">
                        <div className="image__circle">
                            <img src={about} alt="" />
                        </div>
                        <h2>Get in touch with us</h2>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="message__body">
                        <input name='name' type="text" placeholder='Enter full name' />
                        <input name='email' type="text" placeholder='Enter email address' />
                        <input name='subject' type="text" placeholder='Message subject' />
                        <textarea name='message' placeholder='Message body' className='message__content' cols="30" rows="5"/>
                        <button>Send</button>
                    </form>
                    <div className="links">
                        <div className="phone">
                            <a href="tel:+233 342 295 468"><BsFillTelephoneFill className='call' /></a>
                            <h6>+233 244 471 234</h6>
                        </div>
                        <div className="icons">
                            <a target='_blank' href="https://api.whatsapp.com/send?phone=+233244471234"><BsWhatsapp className='what'/></a>
                            <a target='_blank' href="https://m.me/robert.juniorannan.1"><BsFacebook className='face'/></a>
                            <a href="https://twitter.com/robertjunioran" target='_blank'><BsTwitter className='twit'/></a>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Pictures</h1>
            <div className="down">
                <div className="images">
                    {
                    myestates?.photos?.map(((photo, id)=>(
                        <div className="images" key={id}>
                            <div className="one_image">
                                <small>click to view</small>
                                <img onClick={()=>setCurrentImage(photo)} src={photo} alt="estate_image" />
                            </div>
                        </div>
                    )))
                    }
                </div>
                <div className="big">
                    <img src={currentImage ?  currentImage :myestates?.photos?.[0]} alt="current_image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Check