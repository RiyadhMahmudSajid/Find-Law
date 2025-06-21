import React, { Suspense, useEffect } from 'react';
import { useState } from 'react';
import SinglrBlog from './SinglrBlog';
import Navbar from './Navbar';
import Footer from './Footer';

const Blog = () => {



    const [que, setQue] = useState([])
    useEffect(() => {
        fetch('Question.json')
            .then(res => res.json())
            .then(data => {
                setQue(data)

            })
    }, [])

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto'>
                <h2 className='font-bold text-center text-2xl'>Blog</h2>
                <p className='text-center'>Lets Explore some Basice concept</p>
                <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
                    {
                        que.map(qu => <SinglrBlog key={qu.id} qu={qu}></SinglrBlog>)
                    }
                </Suspense>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;