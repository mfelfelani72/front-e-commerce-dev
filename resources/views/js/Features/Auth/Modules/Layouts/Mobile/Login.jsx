import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

// Components

import { FaceBookIcon, InstagramIcon, LinkdinIcon, Logo, TwitterIcon } from "../../../Components/Icon.jsx"
import { GoogleButton, SubmitButton, TextButton } from '../../../../../Components/Button.jsx';
import { InputEmail, InputPassword } from '../../../../../Components/Input.jsx';
import LoaderDotSpinner from '../../../../../Components/LoaderDotSpinner.jsx';

// Functions

import navigate from '../../../../../Utils/Libs/navigate.js';
import EnableButtonControl from '../../../../../Utils/Libs/EnableButtonControl.js';
import LoginUser from '../../Utils/Libs/LoginUser.js';

// Images

import image from "../../../../../../../../public/assets/image/register_cover.jpg"

// Zustand

import useAppStore from "../../../../../Stores/AppStore.js";

const Login = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const [errors, setErrors] = useState([]);

  const sendRequest = useAppStore((state) => state.sendRequest);
  const setSendRequest = useAppStore((state) => state.setSendRequest);

  // functions
  const handleClick = () => {
    if (!sendRequest)
      LoginUser("password", setErrors, setSendRequest);
    setSendRequest(true)
  }
  return (
    <>
      <div className='px-8 py-12 w-full h-screen bg-gradient-to-br from-violet-50 to-white flex flex-col justify-between items-center'>

        <div className='flex flex-col items-center w-full mt-8'>

          <Logo width="36" height="48" />

          <h1 className='mt-4 font-bold text-2xl'>{t("login")}</h1>

          <GoogleButton type={"login"} classname={"py-2 mt-6 max-w-80 min-w-80"} />

          {/* line    Or    line */}

          <div className='flex flex-row w-full mt-4 gap-6 items-center justify-center'>
            <div className='w-28 h-0 outline outline-gray-200'></div>
            <div className='font-medium text-sm text-gray-500'>{t("or")}</div>
            <div className='w-28 h-0 outline outline-gray-200'></div>
          </div>

          {/* form */}

          <div className='max-w-84 min-w-80 mt-2'>
            <InputEmail id="email" label={t("email_address")} placeholder="mfelfelani72@gmail.com" theme="light" />
          </div>
          <div className='mt-4 max-w-84 min-w-80'>
            <InputPassword
              id="password"
              type="password"
              label={t("password")}
              theme={"light"}
              button_first_id="login"
              button_secound_id="login_disable"
              onChange={(event) => {
                EnableButtonControl(event, "login", "login_disable");
              }}
              error={errors["password"]}
            />
          </div>

          <div className='max-w-84 min-w-80 mt-10'>
            <SubmitButton
              id="login"
              onClick={(e) => {
                handleClick();
              }}
              className="hidden relative"
            >
              <div className=''>
                {t("login")}
              </div>
              {sendRequest && <LoaderDotSpinner className={"rtl:left-0 ltr:right-0"} />}
            </SubmitButton>
            <SubmitButton
              id="login_disable"
              className="flex bg-gray-400 pointer-events-none cursor-default"
            >
              <div className=''>
                {t("login")}
              </div>
            </SubmitButton>
          </div>

          <div className='flex flex-row gap-1 mt-4'>
            <div className='text-xs text-gray-900'>
              {t("dont_have_account")}
            </div>
            <TextButton onClick={() => navigate("register")} className="text-xs" text={t("register")} />
          </div>
        </div>

        {/*  */}

        <div>
          <div className='flex flex-row gap-2 mt-4'>
            <FaceBookIcon width="32" height="32" color={"#686677"} />
            <TwitterIcon width="32" height="32" color={"#686677"} />
            <InstagramIcon width="32" height="32" color={"#686677"} />
            <LinkdinIcon width="32" height="32" color={"#686677"} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Login