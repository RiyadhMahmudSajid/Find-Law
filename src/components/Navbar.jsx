import React from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png'
import './Navbae.css'
const Navbar = () => {

    const Links = <>
      
      
      <NavLink to="/"> <li className='mr-6'>Home</li></NavLink>
      <NavLink to="/my-booking"> <li className='mr-6'>My-Bookings</li></NavLink>
      <NavLink to="/blog"> <li className='mr-6'>Blogs</li></NavLink>
      <NavLink to="/contact"> <li className='mr-6'>Contact Us</li></NavLink>
    
    </>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links}
                            
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={logo}></img>Law.BD</a>
                    
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-green-500 rounded-3xl text-white">Contact Now</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;