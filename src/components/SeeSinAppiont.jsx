import React from 'react';




const SeeSinAppiont = ({ app ,remove }) => {

   

    const { name, occupation, consultation_fee,id } = app
    return (
        <div>
           
            <div className='card border border-gray-400 p-8 mb-12 w-11/12 mx-auto'>

                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-medium'>{name}</p>
                        <p className='text-gray-500'>{occupation}</p>
                    </div>
                    <div>
                        <p>Appoinment Fee{consultation_fee.amount}{consultation_fee.currency}</p>
                    </div>
                </div>
                <button onClick={()=>remove(id)} className='btn border bg-white border-red-500 rounded-3xl mt-4'>Cancle</button>
            </div>
           
        </div>
       
    );
};

export default SeeSinAppiont;