import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logo.jpg';
import "./header.css";

const Header = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[1];
    const navigate = useNavigate();
    //console.log(path)
    return (
        <header className='header'>
            <div className="top">
                <div className="left" onClick={()=>navigate('/')}>
                    <div className="logo1">
                        <h1 className='logo2'>DM</h1>
                        <span className='logo3'> Properties LTD</span>
                    </div>
                </div>
                <div className="hright">
                    {
                        path !== 'about' &&
                    <div className="user" onClick={()=>navigate("/about")}>About Us</div>
                    }
                </div>
            </div>
            <div className="down">
                <h4>home of quality and affordable houses and estates</h4>
            </div>
        </header>
    )
}

export default Header
