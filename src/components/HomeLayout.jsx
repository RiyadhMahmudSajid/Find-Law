import React from 'react';

import { Outlet } from 'react-router';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                
                <Home></Home>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
           <Footer></Footer>
        </div>
    );
};

export default HomeLayout;