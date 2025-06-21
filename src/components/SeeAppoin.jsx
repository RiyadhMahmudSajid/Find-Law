import React, { useEffect, useState } from 'react';
import { getStoreApp, removeApp } from '../Utility/addToLc';
import { Link, useLoaderData } from 'react-router';
import SeeSinAppiont from './SeeSinAppiont';
import LawerBarChart from './LawerBarChart';
import Navbar from './Navbar';
import Footer from './Footer';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
const SeeAppoin = () => {

    const data = useLoaderData()
    const [appList, setAppList] = useState([])

    useEffect(() => {

        const seeList = getStoreApp();
        console.log(seeList)
        const convertList = seeList.map(seeLi => parseInt(seeLi))
        const myList = data.filter(book => convertList.includes(book.id))
        setAppList(myList)


    }, [])

    const handleRemove = (id) => {
        removeApp(id)
        toast.error('Appoinment Cancled')
        const updated = appList.filter(app => app.id != id)
        setAppList(updated)
    }
    if (appList.length == 0) {
        return (
            <div>
                <Navbar></Navbar>
                <div className='flex items-center justify-center flex-col min-h-[80vh]'>
                    <div>
                        <p className='text-center font-bold text-3xl'>You Have not Booked any appoinment yet</p>
                        <p className='text-center text-gray-500 my-4'>Our Platfrom connext you with varified experience Lawer with various speaciliest</p>
                    </div>
                    <Link to="/" className='btn bg-blue-500 text-white'>Back to Home</Link>
                </div>
                <Footer></Footer>
            </div>
        )
    }
    return (
        <div>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 w-11/12 mx-auto'>

                {
                    appList.map(app => <LawerBarChart key={app.id} lawer={app}></LawerBarChart>)
                }
            </div>
            <h2 className='font-bold text-3xl text-center'>My Today Appointments</h2>
            <p className='text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience</p>
            <div className='min-h-[80vh]'>
                {
                    appList.map(app => <SeeSinAppiont key={app.id} app={app} remove={handleRemove}></SeeSinAppiont>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default SeeAppoin;