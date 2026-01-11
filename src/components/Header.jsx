import React from 'react';
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className='justify-center items-center flex-col flex'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism With Fear & Dor</p>
            
        </div>
    );
};

export default Header;