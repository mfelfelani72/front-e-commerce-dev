import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import {
    FaceBookIcon,
    InstagramIcon,
    LinkdinIcon,
    Logo,
    TwitterIcon,
} from "../../../../../Components/Icon.jsx";
import {
    GoogleButton,
    SubmitButton,
    TextButton,
} from "../../../../../Components/Button.jsx";
import {
    InputEmail,
    InputPassword,
    InputRePassword,
} from "../../../../../Components/Input.jsx";
import LoaderDotSpinner from "../../../../../Components/LoaderDotSpinner.jsx";

// Functions

import navigate from "../../../../../Utils/Libs/navigate.js";
import RegisterUser from "../../Utils/Libs/RegisterUser.js";

// Zustand

import useAppStore from "../../../../../Stores/AppStore.js";

const Register = () => {
    // hooks
    const { t } = useTranslation();

    // states
    const [errors, setErrors] = useState([]);

    // states
    const sendRequest = useAppStore((state) => state.sendRequest);
    const setSendRequest = useAppStore((state) => state.setSendRequest);

    // functions
    const handleClick = () => {
        if (!sendRequest) RegisterUser(setErrors, setSendRequest);
        setSendRequest(true);
    };
    return (
        <>
            <div className="flex flex-row w-screen h-screen items-center justify-center py-1 bg-gradient-to-br from-violet-200 to-white">
                <div className="w-[32rem] max-h-[42rem] h-full rounded-4xl bg-gray-50 inline-flex flex-col justify-between items-center px-14 py-8 shadow-xl z-30">
                    <Logo width="36" height="48" />

                    <h1 className="font-bold text-2xl">
                        {t("create_account")}
                    </h1>

                    <GoogleButton type="register" classname={"py-2 mt-2"} />

                    {/* line    Or    line */}

                    <div className="flex flex-row mt-2 gap-6 items-center">
                        <div className="w-28 h-0 outline outline-gray-200"></div>
                        <div className="font-medium text-sm text-gray-500">
                            {t("or")}
                        </div>
                        <div className="w-28 h-0 outline outline-gray-200"></div>
                    </div>

                    {/* form */}
                    <div className="flex flex-col items-start w-full">
                        <div className="w-full">
                            <InputEmail
                                id="email"
                                label={t("email_address")}
                                placeholder="mfelfelani72@gmail.com"
                                theme="light"
                                error={errors["email"]}
                            />
                        </div>
                        <div className="mt-4 w-full">
                            <InputPassword
                                id="ch_password"
                                type="change_password"
                                label={t("password")}
                                theme={"light"}
                            />
                        </div>
                        <div className="mt-4 w-full">
                            <InputRePassword
                                id="ch_confirm_password"
                                label={t("re_password")}
                                theme={"light"}
                                button_id="register"
                                error={errors["password"]}
                            />
                        </div>

                        <div className="w-full mt-7">
                            <SubmitButton
                                id="register"
                                onClick={() => {
                                    handleClick();
                                }}
                                className="hidden relative"
                            >
                                <div className="">{t("create_account")}</div>
                                {sendRequest && (
                                    <LoaderDotSpinner
                                        className={"rtl:left-0 ltr:right-0"}
                                    />
                                )}
                            </SubmitButton>
                            <SubmitButton
                                id="register_disable"
                                className="flex bg-gray-400 pointer-events-none cursor-default"
                            >
                                <div className="">{t("create_account")}</div>
                            </SubmitButton>
                        </div>
                    </div>

                    {/*  */}

                    <div className="flex flex-row gap-1 mt-2">
                        <div className="text-xs text-gray-900">
                            {t("already_have_account")}
                        </div>
                        <TextButton
                            onClick={() => navigate("login")}
                            className="text-xs"
                            text={t("login")}
                        />
                    </div>

                    <div className="flex flex-row gap-2 mt-2">
                        <FaceBookIcon
                            width="32"
                            height="32"
                            color={"#686677"}
                        />
                        <TwitterIcon width="32" height="32" color={"#686677"} />
                        <InstagramIcon
                            width="32"
                            height="32"
                            color={"#686677"}
                        />
                        <LinkdinIcon width="32" height="32" color={"#686677"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
