import React from 'react';
import page from '../assets/error.png';
import { Link } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[80vh] mx-auto flex flex-col items-center justify-center'>
                <div><img src={page} alt="" /></div>
                <p className='font-bold text-rose-400'>404-Page not found</p>
                <p className='my-4 text-gray-600'>Oppos! The Page You are Looking does not exist</p>
                <Link className='btn bg-green-500 text-white' to="/"> Back to Home</Link>
                
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;