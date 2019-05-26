import React from 'react';
import  './Logo.css';
import logo from '../../assets/img/logo.png';


const Logo = () => {
    return (
        <div className="site-logo float-left">
            <img src={logo} alt="logo"/>
        </div>
    );
};

export default Logo;