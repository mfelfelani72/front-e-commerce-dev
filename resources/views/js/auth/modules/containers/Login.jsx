import React from 'react';
import { useTranslation } from 'react-i18next';

// Components

import { FaceBookIcon, InstagramIcon, LinkdinIcon, Logo, TwitterIcon } from "../../../../../../public/core/components/Icon.jsx"
import { GoogleButton, SubmitButton, TextButton } from '../../../../../../public/core/components/Button.jsx';
import { InputEmail, InputPassword, InputRePassword } from '../../../../../../public/core/components/Input.jsx';
import LoaderDotSpinner from '../../../../../../public/core/components/LoaderDotSpinner.jsx';

// Functions

import navigate from '../../../../../../app/Utils/Libs/navigate';

// Images

import image from "../../../../../../public/assets/image/image2.jpg"

// Zustand

import useAppStore from "../../../../../../app/Utils/stores/AppStore.js";
import fa from '../utils/services/i18n/fa.js';

const Login = () => {
  // hooks
  const { t } = useTranslation();

  // states

  const sendRequest = useAppStore((state) => state.sendRequest);
  const setSendRequest = useAppStore((state) => state.setSendRequest);

  // functions
  const handleClick = () => {
    setSendRequest(true)
  }

  return (
    <>
      <div className='flex flex-row w-screen h-screen items-center justify-center  bg-gradient-to-br from-violet-100 to-white'>
        <div className='w-[64rem] h-[42rem] relative'>

          <div className='absolute inset-y-0 left-[0.5rem] shadow-xl z-10'>
            <img src={image} alt='image' className='w-[32rem] h-full rounded-bl-2xl rounded-tl-2xl' />
          </div>

          <div className='absolute bg-purple-700 opacity-30 inset-y-0 left-[0.5rem] rounded-2xl z-20 w-[32rem] h-full'>
           
          </div>
          <div className='absolute inset-y-0 right-[1.5rem] rounded-bl-4xl rounded-tl-4xl rounded-br-2xl rounded-tr-2xl bg-gray-50 w-[32rem] h-full inline-flex flex-col justify-center items-center p-14 shadow-xl z-30'>
            <Logo width="36" height="48" />

            <h1 className='font-bold text-2xl'>{t("create_account")}</h1>

            <GoogleButton classname={"py-2 mt-6"} />

            {/* line    Or    line */}

            <div className='flex flex-row mt-6 gap-6 items-center'>
              <div className='w-28 h-0 outline outline-gray-200'></div>
              <div className='font-medium text-sm text-gray-500'>{t("or")}</div>
              <div className='w-28 h-0 outline outline-gray-200'></div>
            </div>

            {/* form */}
            <div className='flex flex-col items-start w-full mt-6'>
              <div className='w-full'>
                <InputEmail id="email" label={t("email_address")} placeholder="mfelfelani72@gmail.com" theme="light" />
              </div>
              <div className='mt-4 w-full'>
                <InputPassword
                  id="ch_password"
                  type="change_password"
                  label={t("password")}
                  theme={"light"}
                />
              </div>
              <div className='mt-4 w-full'>
                <InputRePassword id="ch_confirm_password" label={t("re_password")}
                  theme={"light"} button_id="register" />
              </div>

              <div className='w-full mt-10'>
                <SubmitButton
                  id="register"
                  onClick={() => {
                    handleClick();
                  }}
                  className="hidden relative"
                >
                  <div className=''>
                    {t("create_account")}
                  </div>
                  {sendRequest && <LoaderDotSpinner className={"rtl:left-0 ltr:right-0"} />}
                </SubmitButton>
                <SubmitButton
                  id="register_disable"
                  className="flex bg-gray-400 pointer-events-none cursor-default"
                >
                  <div className=''>
                    {t("create_account")}
                  </div>
                </SubmitButton>
              </div>
            </div>

            {/*  */}

            <div className='flex flex-row gap-1 mt-3'>
              <div className='text-xs text-gray-900'>
                {t("already_have_account")}
              </div>
              <TextButton className="text-xs" text={t("login")} />
            </div>

            <div className='flex flex-row gap-2 mt-4'>
              <FaceBookIcon width="32" height="32" color={"#686677"} />
              <TwitterIcon width="32" height="32" color={"#686677"} />
              <InstagramIcon width="32" height="32" color={"#686677"} />
              <LinkdinIcon width="32" height="32" color={"#686677"} />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;