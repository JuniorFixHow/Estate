import React from 'react';
import "./header.css";

const Header = () => {
    return (
        <header className='header'>
            <div className="left">Paulo</div>
            <div className="hright">
                <div className="account">
                    <div className="login">Login</div>
                    <div className="signup">Sign up</div>
                </div>
                <div className="user">UserName</div>
            </div>
        </header>
    )
}

export default Header
