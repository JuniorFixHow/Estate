import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
import './contact.css';
import Header from '../../components/header/Header';
import MyImage from '../../assets/email.png';
import Footer from '../../components/footer/Footer';


const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k2f8v0l', 'template_tqd81rd', e.target, 'xGLqC9hWOuCrN6_pk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <div className='contact'>
            <Header/>
            <div className="main__container">
                <h2>Contact DM Properties</h2>
                <div className="container">
                    <img src={MyImage} alt="" />
                    <form ref={form} onSubmit={sendEmail} >
                        <div className="inp">
                            <input placeholder='* name' name='name' required type ="text" />
                            <input placeholder='* subject' name='subject' required type ="text" />
                            <input placeholder='* email address' name='email' required type ="email" />
                            <textarea name='message' placeholder='* Message body' className='message__content' cols="30" rows="5"  required />
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
