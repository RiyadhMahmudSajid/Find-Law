import React from 'react';
import totLawer from '../assets/success-doctor.png'
import rivew from '../assets/success-review.png'
import cash from '../assets/success-patients.png'
import staf from '../assets/success-staffs.png'
import CountUp from 'react-countup';
const Counter = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <h2 className='text-center font-bold text-3xl mt-20'>We Provide Best Law Service</h2>
                <p className='text-center text-gray-500 my-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mb-12'>
                <div className='bg-gray-200 border border-gray-300 p-10 rounded-xl'>
                    <img src={totLawer} alt="" srcset="" />
                    <p className='font-bold text-5xl py-2'><CountUp end={199} duration={10} />+</p>
                    <p>Total Lawer</p>
                </div>
                <div className='bg-gray-200 border border-gray-300 p-10 rounded-xl'>
                    <img src={rivew} alt="" srcset="" />
                    <p className='font-bold text-5xl py-2'><CountUp end={467} duration={10}/>+</p>
                    <p>Total Lawer</p>
                </div>
                <div className='bg-gray-200 border border-gray-300 p-10 rounded-xl'>
                    <img src={cash} alt="" srcset="" />
                    <p className='font-bold text-5xl py-2'><CountUp end={1900} duration={10}/>+</p>
                    <p>Total Lawer</p>
                </div>
                <div className='bg-gray-200 border border-gray-300 p-10 rounded-xl'>
                    <img src={staf} alt="" srcset="" />
                    <p className='font-bold text-5xl py-2'><CountUp end={300} duration={10}/>+</p>
                    <p>Total Lawer</p>
                </div>
            </div>
        </div>
    );
};

export default Counter;