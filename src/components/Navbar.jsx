import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className="div"></div>
            <div className="div flex gap-4 text-accent">
                <NavLink to='/' className='hover:text-black'>Home</NavLink>
                <NavLink to='/about' className='hover:text-black'>About</NavLink>
                <NavLink to='/career' className='hover:text-black'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-4">
                <img src={user} alt="" />
                <button className='btn btn-primary px-8'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;