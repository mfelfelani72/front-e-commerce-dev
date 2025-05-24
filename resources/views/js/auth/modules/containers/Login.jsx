import React from 'react';
import { useTranslation } from 'react-i18next';

// Components

import { Logo } from "../../../../../../public/core/components/Icon.jsx"
import { GoogleButton } from '../../../../../../public/core/components/Button.jsx';
import { InputEmail } from '../../../../../../public/core/components/Input.jsx';

// Functions

import navigate from '../../../../../../app/Utils/Libs/navigate';

// Images

import image from "../../../../../../public/assets/image/image.png"


const Login = () => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <div className='flex flex-row w-screen h-screen items-center justify-center'>
        <div className='w-[64rem] h-full relative '>
          <div className='absolute inset-y-0 left-[0.5rem]'>
            <img src={image} alt='image' className='w-[32rem] h-full' />
          </div>
          <div className='absolute inset-y-0 right-[1.5rem] rounded-bl-4xl rounded-tl-4xl bg-gray-50 w-[32rem] h-full inline-flex flex-col items-center p-14'>
            <Logo width="36" height="48" />

            <h1 className='mt-6 font-bold text-2xl'>{t("create_account")}</h1>

            <GoogleButton classname={"mt-6"} />

            <div className='flex flex-row mt-6 gap-6 items-center'>
              <div className='w-28 h-0 outline outline-gray-200'></div>
              <div className='font-medium text-sm text-gray-500'>{t("or")}</div>
              <div className='w-28 h-0 outline outline-gray-200'></div>
            </div>

            <div className='flex flex-col items-start w-full mt-6'>
              <InputEmail id="email" label="email" placeholder="mfelfelani72@gmail.com" theme="light" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;