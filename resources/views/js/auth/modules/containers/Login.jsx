import React from 'react';

// Components

import { Logo } from "../../../../../../public/core/components/Icon.jsx"

// Functions

import navigate from '../../../../../../app/Utils/Libs/navigate';

// Images

import image from "../../../../../../public/assets/image/image.png"

const Login = () => {
  return (
    <>
      <div className='flex flex-row w-screen h-screen items-center justify-center'>
        <div className='w-[64rem] h-full relative '>
          <div className='absolute inset-y-0 left-[0.5rem]'>
            <img src={image} alt='image' className='w-[32rem] h-full' />
          </div>
          <div className='absolute inset-y-0 right-[1.5rem] rounded-bl-4xl rounded-tl-4xl bg-gray-50 w-[32rem] h-full inline-flex flex-col items-center p-14'>
            <Logo width="36" height="48" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;