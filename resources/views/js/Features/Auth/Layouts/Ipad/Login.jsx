import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

// Components

import { FaceBookIcon, InstagramIcon, LinkdinIcon, Logo, TwitterIcon } from "../../../../Components/Icon.jsx"
import { GoogleButton, SubmitButton, TextButton } from '../../../../Components/Button.jsx';
import { InputEmail, InputPassword } from '../../../../Components/Input.jsx';
import LoaderDotSpinner from '../../../../Components/LoaderDotSpinner.jsx';

// Functions

import navigate from '../../../../Utils/Libs/navigate.js';
import EnableButtonControl from '../../../../Utils/Libs/EnableButtonControl.js';
import LoginUser from '../../Utils/Libs/LoginUser.js';

// Zustand

import useAppStore from "../../../../Stores/AppStore.js";

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
            <div className='flex flex-row w-screen h-screen items-center justify-center py-4 bg-gradient-to-br from-violet-200 to-white'>

                {/* login form */}

                <div className='w-[32rem] max-h-[42rem] h-full rounded-4xl bg-gray-50 inline-flex flex-col justify-between items-center px-14 py-8 shadow-xl z-30'>

                    <div className='flex flex-col w-full items-center'>
                        <Logo width="36" height="48" />

                        <h1 className='font-bold text-2xl'>{t("login")}</h1>

                        <GoogleButton type={"login"} classname={"py-2 mt-4"} />

                        {/* line    Or    line */}

                        <div className='flex flex-row mt-3 gap-6 items-center'>
                            <div className='w-28 h-0 outline outline-gray-200'></div>
                            <div className='font-medium text-sm text-gray-500'>{t("or")}</div>
                            <div className='w-28 h-0 outline outline-gray-200'></div>
                        </div>

                        {/* form */}
                        <div className='flex flex-col items-start w-full mt-1'>
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

        </>
    )
}

export default Login