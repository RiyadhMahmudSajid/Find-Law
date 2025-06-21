import React from 'react';
import page from '../assets/error.png';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
            <div><img src={page} alt=""  /></div>
            <p>404-Page not found</p>
            <Link to="/"> <li>Back to Home</li></Link>
        </div>
    );
};

export default ErrorPage;