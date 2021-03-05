import React from 'react';

const ImageLink = ( { onInputChange, onButtonSubmit}) => {
    return (
        <div className='flex flex-col w-7/12'>
            <p className='font-semibold text-base text-white pb-2'>
                {'Let me detect your face from, your pictures. Send it below!'}
            </p>
            <div className='w-full bg-blulight bg-opacity-10 flex flex-col justify-center items-center rounded-t-xl shadow-xl p-2'>
                <input 
                className='w-9/12 py-1 px-2 my-1 placeholder-opacity-50 rounded-sm focus:outline-none focus:ring-2 focus:ring-base2' 
                type="text"
                onChange={onInputChange}
                onKeyPress={onButtonSubmit}                  
                placeholder="Input your picture link here!" />
                <button 
                className='w-3/12 py-1 font-semibold text-white bg-bludark transform hover:scale-105 ease-out duration-300 active:bg-blue-900 focus:outline-none rounded-md'
                onClick={onButtonSubmit} >
                    DETECT
                </button>
            </div>
        </div>
    )
}

export default ImageLink;