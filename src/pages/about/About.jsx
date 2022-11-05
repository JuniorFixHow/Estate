import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import './about.css';
import about from '../../assets/dm.jpg';
import manager from '../../assets/manager.jpg';
import Footer from '../../components/footer/Footer';

const About = () => {
    return (
        <div className='about'>
            <Header/>
            <div className='notice'>
                <h1>We have affordable estates and houses to match your dreams and wealth</h1>
                <h4>We have qaulity and everlasting buildings at vintage points accross Accra. Get an estate and start living your dream</h4>
            </div>

            <div className="image__card">
                <img src={about} alt="" />
            </div>
            <hr />
            <div className="texts">
                <h1>DM Properties</h1>
                <h4>DM Properties Limited is a diverse proerty group encompassing all facts of property, from commercial sales and leasing through to residential property, business sales, commercial and residential asset management.

                    With industry leading agents and managers servicing Greater Accra and beyond DM Properties Limited's team provides high quality care and service in a competitive property market. DM Properties Limited maintains strong market presence with a new corporate look.

                    With boast a Management Team with wide experience in the industry which is rarely matched strategies, commitment to personal relationships and aggressive ongoing annual growth targets in place, the Company is planning to progress well into the future.

                    Our team is continually growing in all fields of property to provide a the service and knowledge much needed to the property market.

                    At DM Properties Limited we strive to provide a friendly and knowledgeable service that will allow our clients to prosper and grow their property portfolio.
                </h4>
            </div>
            <div className="bmanager">
                <h1>Contact</h1>
                <div className="manager">
                    <div className="left">
                        <img src={manager} alt="" />
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <div className="right">
                        <h2>Have a question? <br/> The manager is ever <br/> ready to answer</h2>
                        <h5>Contact DM Properties for enquiries</h5>
                        <hr />
                        <div className="contact__button">Contact</div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default About
