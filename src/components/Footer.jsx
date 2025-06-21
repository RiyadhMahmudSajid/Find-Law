import React from 'react';
import logo from '../assets/logo-footer.png';
import { Link, NavLink } from 'react-router';
import facbook from "../assets/facebook-logo-48.png"
import Twiter from "../assets/icons8-twitter-bird-48.png"
import linkdin from "../assets/lindic.png"
import youtub from "../assets/fi_3670209.png"
const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <div className='flex flex-col items-center justify-center  mx-auto'>
                <div className=''>
                    <img className='' src={logo} alt="" />
                </div>
                <div className='flex gap-5'>
                    <NavLink to="/"> <li className='list-none'>Home</li></NavLink>
                    <NavLink to="/my-booking"> <li className='list-none'>My-Bookings</li></NavLink>
                    <NavLink to="/blog"> <li className='list-none'>Blogs</li></NavLink>
                    <NavLink  to="/contact"> <li className='list-none'>Contact Us</li></NavLink>
                </div>
                <div className='flex gap-5'>
                    <a href="https://www.facebook.com/" target='_blank'> <img src={facbook} alt=""  /> </a>
                    <a href="https://x.com/"  target='_blank'> <img src={ Twiter} alt=""  /></a>
                    <a href="https://www.linkedin.com/"  target='_blank'> <img src={linkdin} alt="" /> </a>
                    <a href="https://www.youtube.com/" target='_blank'> <img src= {youtub} alt="" /></a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;