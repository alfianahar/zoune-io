import React from 'react';


const Navigation = ({ onRouteChange, isSignedIn, name, entries }) => {
    if (isSignedIn) {
        return (
            <nav className='flex justify-between items-center pt-2 px-7 max-h-20'>
                <div className='flex flex-row py-1 px-2 items-center'>
                    <div className='rounded-full border-t-2 border-l-2 border-b-2 shadow-lg flex justify-center z-10'>
                        <img 
                        src='https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
                        className='h-10 w-10 object-center object-cover rounded-full '
                        alt='icon' />
                    </div>
                    <div className='text-xl font-semibold bg-white bg-opacity-25 -ml-3 pl-4 pr-2 border-t-2 border-r-2 border-b-2 rounded-lg'>
                        {name}, Xp: {entries} pts
                    </div>
                </div>
                <div className='py-1 px-2 w-1/12'>
                    <button
                        onClick={() => onRouteChange('signout')} 
                        className='text-gray-100 bg-blulight bg-opacity-50 transition duration-300 ease-out transform hover:scale-105 hover:border-transparent hover:text-white hover:bg-red.oth focus:outline-none rounded-md border-2 py-2 px-1 w-full text-sm font-medium'>
                        Sign Out
                    </button>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className='flex justify-end items-center pt-2 pr-7 space-x-4'>
                <div className='py-1 px-2 w-1/12'>
                    <button
                    onClick={() => onRouteChange('register')} 
                    className='text-base2 hover:text-white focus:outline-none py-2 px-4 text-base font-semibold'>
                        Register
                    </button>                 
                </div>
                <div className='py-1 px-2 w-1/12'>
                    <button
                    onClick={() => onRouteChange('login')} 
                    className='text-gray-100 bg-blulight bg-opacity-50 transition duration-300 ease-out transform hover:scale-105 hover:border-transparent hover:text-white hover:bg-red.oth focus:outline-none rounded-md border-2 py-2 px-4 w-full text-sm font-medium'>
                        Login
                    </button>                 
                </div>       
            </nav>
        );
    }
}

export default Navigation;
