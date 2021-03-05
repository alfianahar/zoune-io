import React from 'react';
import anime from 'animejs';
import ZLogo from './Zlogo.svg';


const Logo = () => {
    anime({
        targets: '.rotateLogo',
        loop: true,
        rotate: {
            value: 360,
            duration: 10000,
            easing: 'linear'
        }
      });
    return (
        <div className='flex justify-center my-3'>
            <div className='rotateLogo bg-red.oth h-20 w-20 rounded-full border-2 shadow-lg flex justify-center'>
                <img src={ZLogo} className='w-7/12' alt="ZouneAILogo"/>
            </div>
        </div>
    )
}

export default Logo;