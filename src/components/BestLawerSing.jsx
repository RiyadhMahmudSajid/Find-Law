import React from 'react';
import  lawyer from '../assets/lawyer.png'
import { Link } from 'react-router';
const BestLawerSing = ({lower}) => {
    const {status,experience,name,license_no,occupation,id} = lower
   
    return (
        <div className='card w-[607px] bg-base-100  shadow-sm'>
            <div className='flex items-center'>
                <div>
                    <img src={lawyer} alt="No" />
                </div>
                <div>
                    <div className='flex gap-2'>
                        <div className='bg-green-100 text-green-500 btn rounded-3xl '>{status}</div>
                        <div className='bg-green-100 text-blue-500 btn rounded-3xl'>{experience}</div>
                    </div>
                    <div>
                        <p className='font-bold text-2xl'>{name}</p>
                        <p className='text-xl text-gray-500'>{occupation}</p>
                        <p className='text-sm text-gray-500 my-2'>{license_no}</p>
                    </div>
                    <Link to={`/singleLawer/${id}`}><button className='btn mt-1 w-full rounded-3xl text-blue-600'>ViewDetails</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default BestLawerSing;