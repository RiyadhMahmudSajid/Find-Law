import React from 'react';
import Navbar from './Navbar';
import banner from '../assets/banner-img-1.png'
import BestLawer from './BestLawer';
import Counter from './Counter';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            `url(${banner})`,
                    }}
                >
                    <div className="hero-overlay"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-4xl">
                            <h1 className="mb-5 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                            <p className="mb-5">
                                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <BestLawer></BestLawer>
            <Counter></Counter>
            <Footer></Footer>
        </div>
    );
};

export default Home;