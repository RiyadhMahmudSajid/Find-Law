import React from 'react';

const SinglrBlog = ({ qu }) => {
    const { Que, Ans , add} = qu
    return (
        <div>
            <div className='rounded-2xl bg-gray-100 my-2 p-8'>
                <p className='font-bold text-2xl'>{Que}</p>
                <p className='border-t border-b border-t-gray-500 border-b-gray-500 py-2 my-2'>{Ans}</p>
                <p className='text-gray-400'>{add}</p>
            </div>
        </div>
    );
};

export default SinglrBlog;