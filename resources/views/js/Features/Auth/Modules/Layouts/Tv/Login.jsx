import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

// Components

import { FaceBookIcon, InstagramIcon, LinkdinIcon, Logo, TwitterIcon } from "../../../../../Core/Components/Icon.jsx"
import { GoogleButton, SubmitButton, TextButton } from '../../../../../Core/Components/Button.jsx';
import { InputEmail, InputPassword } from '../../../../../Core/Components/Input.jsx';
import LoaderDotSpinner from '../../../../../Core/Components/LoaderDotSpinner.jsx';

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
            <div className='flex flex-row w-screen h-screen items-center justify-center bg-gradient-to-br from-violet-200 py-4 to-white'>

                <div className='w-[64rem] max-h-[42rem] h-full relative'>

                    {/* image */}
                    <div className='absolute inset-y-0 left-[1rem] shadow-xl z-10'>
                        <img src={image} alt='image' className='w-[32rem] h-full rounded-bl-2xl rounded-tl-2xl' />
                    </div>

                    <div className='absolute bg-purple-700 opacity-30 inset-y-0 left-[1rem] rounded-2xl z-20 w-[32rem] h-full'>
                    </div>

                    {/* login form */}

                    <div className='absolute inset-y-0 right-[1rem] rounded-bl-4xl rounded-tl-4xl rounded-br-2xl rounded-tr-2xl bg-gray-50 w-[32rem] h-full inline-flex flex-col justify-between items-center px-14 py-8 shadow-xl z-30'>

                        <div className='flex flex-col w-full items-center'>
                            <Logo width="36" height="48" />

                            <h1 className='font-bold text-2xl'>{t("login")}</h1>

                            <GoogleButton type={"login"} classname={"py-2 mt-4"} />

                            {/* line    Or    line */}

                            <div className='flex flex-row mt-4 gap-6 items-center'>
                                <div className='w-28 h-0 outline outline-gray-200'></div>
                                <div className='font-medium text-sm text-gray-500'>{t("or")}</div>
                                <div className='w-28 h-0 outline outline-gray-200'></div>
                            </div>

                            {/* form */}
                            <div className='flex flex-col items-start w-full mt-2'>
                                <div className='w-full'>
                                    <InputEmail id="email" label={t("email_address")} placeholder="mfelfelani72@gmail.com" theme="light" />
                                </div>
                                <div className='mt-4 w-full'>
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

                                <div className='w-full mt-10'>
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

                                <div className='flex flex-row w-full justify-center gap-1 mt-2'>
                                    <div className='text-xs text-gray-900'>
                                        {t("dont_have_account")}
                                    </div>
                                    <TextButton onClick={() => navigate("register")} className="text-xs" text={t("register")} />
                                </div>
                            </div>
                        </div>



                        {/*  */}

                        <div className='flex flex-row gap-2 mt-2'>
                            <FaceBookIcon width="32" height="32" color={"#686677"} />
                            <TwitterIcon width="32" height="32" color={"#686677"} />
                            <InstagramIcon width="32" height="32" color={"#686677"} />
                            <LinkdinIcon width="32" height="32" color={"#686677"} />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login