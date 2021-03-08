import React from 'react';
import logout from './power-button-off.svg';

const Navigation = ({ onRouteChange, isSignedIn, name, entries }) => {
    if (isSignedIn) {
        return (
            <nav className='flex justify-between items-center bg-white bg-opacity-10 mb-5 md:mb-0 md:bg-opacity-0 md:px-3 lg:pt-2 lg:px-7'>
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
                <div className='flex flex-row items-center'>
                    <div className='md:hidden pr-5'>
                        <button 
                            onClick={() => onRouteChange('signout')} 
                            className='flex justify-center'>
                            <img className="h-8" style={{filter: "invert(53%) sepia(24%) saturate(1380%) hue-rotate(324deg) brightness(95%) contrast(95%)"}} src={logout} alt="logout from flaticon"/>
                        </button>
                    </div>
                    <div className='hidden md:flex md:py-1 md:px-2'>
                        <button
                            onClick={() => onRouteChange('signout')} 
                            className='text-base2 text-base font-semibold md:text-gray-100 md:bg-blulight md:bg-opacity-50 md:transition md:duration-300 md:ease-out md:transform hover:scale-105 hover:border-transparent hover:text-white hover:bg-red.oth focus:outline-none rounded-md md:border-2 py-2 px-2 md:px-4 md:w-full md:text-sm md:font-medium'>
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className='flex justify-end items-center w-full mb-5 md:mb-0    bg-white bg-opacity-10 rounded-b-lg shadow-lg sm:max-w-full md:bg-opacity-0 md:rounded-none md:shadow-none md:pt-2 md:pr-7 md:space-x-4'>
                <div className='py-1 px-2'>
                    <button
                    onClick={() => onRouteChange('register')} 
                    className='text-base2 hover:text-white hover:bg-red.oth rounded-md focus:outline-none py-2 px-4 text-base font-semibold'>
                        Register
                    </button>                 
                </div>
                <div className='py-1 px-2'>
                    <button
                    onClick={() => onRouteChange('login')} 
                    className='text-base2 text-base font-semibold md:text-gray-100 md:bg-blulight md:bg-opacity-50 md:transition md:duration-300 md:ease-out md:transform hover:scale-105 hover:border-transparent hover:text-white hover:bg-red.oth focus:outline-none rounded-md md:border-2 py-2 px-4 md:w-full md:text-sm md:font-medium'>
                        Login
                    </button>                 
                </div>       
            </nav>
        );
    }
}

export default Navigation;
