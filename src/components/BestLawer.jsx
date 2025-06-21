import React, { useEffect } from 'react';
import { useState } from 'react';
import BestLawerSing from './BestLawerSing';

const BestLawer = () => {

    const [show, setShow] = useState(false)

    const [lower, setLower] = useState([]);
    useEffect(() => {
        fetch('Lawer.json')
            .then(res => res.json())
            .then(data => {
                setLower(data)
            })
    }, [])

    const handleShow = () => {
        setShow(true)
    }
    const displayLawer = show ? lower : lower.slice(0, 6)
    return (
        <>
            <div className='max-w-4xl mx-auto'>
                <h2 className='text-4xl font-bold text-center mt-12'>Our Best Lawyers</h2>
                <p className='text-center text-gray-500 my-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2  max-w-fit gap-10  mx-auto'>
                {
                    displayLawer.map(lower => <BestLawerSing key={lower.id} lower={lower} ></BestLawerSing>)
                }
            </div>
            <div className='flex items-center justify-center'>
                {
                    !show && (
                        <button className='btn text-white px-4 mt-4 bg-green-400' onClick={handleShow}>View All</button>
                    )
                }
            </div>
        </>

    );
};

export default BestLawer;