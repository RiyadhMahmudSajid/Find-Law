import React, { useState } from 'react';
import lawyer from '../assets/lawyer.png'
import { Link,  useLoaderData, useParams } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { addStoreApp } from '../Utility/addToLc';
import LawerBarChart from './LawerBarChart';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
const SingleLawerDetails = () => {
    const { id } = useParams()
    const loader = useLoaderData()
    const [show, setShow] = useState(false);

    const singleLawer = loader.find(loader => loader.id == id)
    if (!singleLawer) {
        return (
            <>
                <Navbar></Navbar>
                <div className='flex flex-col items-center justify-center min-h-[80vh]'>
                    <p className='font-bold text-3xl mb-2'>Now Lawyer Found</p>
                    <p className='text-gray-500'>No Lawyer found with License No-</p>
                    <p>{id}</p>
                    <Link to="/" className='btn bg-green-600 text-white mt-4'>View All Lawyer</Link>
                </div>
                
                <Footer></Footer>
            </>
        )
    }
    const { status, experience, name, license_no, occupation, availability, consultation_fee } = singleLawer
    const handleLawerData = (id) => {
        toast.success(`Appoinment sechedul for ${singleLawer.name} successfully`)
        addStoreApp(id)
        setShow(true)
    }

    return (
        <div >
            <Navbar></Navbar>
            <div className='card bg-gray-100 p-16 text-center  shadow-sm w-11/12 mx-auto my-6'>
                <h2 className='font-bold text-3xl mb-1'>Lawyer’s Profile Details</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore molestiae veniam totam beatae reiciendis itaque nihil optio sapiente excepturi exercitationem.</p>
            </div>
            <div className='w-11/12 mx-auto mb-6' >
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
                                <div className='flex'>
                                    {
                                        availability.map((avail, index) => (<p key={index} >{avail}</p>))
                                    }
                                </div>
                                <p>{consultation_fee.amount}{consultation_fee.currency}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className='card border border-gray-200  shadow-sm w-11/12 mx-auto p-8 mb-8'>
                <h2 className='text-center font-medium text-2xl mb-1'>Book an Appoinment</h2>
                <div className='flex justify-between items-center py-4 border-b border-b-gray-200 border-t border-t-gray-200' style={{ borderTopStyle: 'dashed' }}>
                    <p className='font-bold'>Availability</p>
                    <p className='bg-green-100 rounded-3xl btn text-green-600'>Lawyer Available Today</p>
                </div>
                <p className='bg-[#FFA0001A] text-amber-400 p-2 my-4'>Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <Link className='w-full ' to="/my-booking"> <button onClick={() => handleLawerData(id)} className='btn bg-green-600 my-2 w-full'>Book an appoinment now</button></Link>
                {
                    show && singleLawer && (
                        <div>
                            <LawerBarChart lawer={singleLawer}></LawerBarChart>
                        </div>
                    )
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SingleLawerDetails;