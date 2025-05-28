import { useTranslation } from "react-i18next";

// Components

import RegisterMobile from '../Layouts/Mobile/Register.jsx';
import RegisterIpad from '../Layouts/Ipad/Register.jsx';
import RegisterDesktop from '../Layouts/Desktop/Register.jsx';
import RegisterTv from '../Layouts/Tv/Register.jsx';

// Hooks

import useDevice from '../../../../Utils/Hooks/useDevice.js';
import { Head } from "@inertiajs/react";

const Register = () => {
    // hooks

    const { t } = useTranslation();

    const {
        type,
        orientation,
        screenWidth,
        isMobile,
        isIpad,
        isDesktop,
        isTv,
    } = useDevice();

    return (
        <>
            <Head>
                <title>{t("register")}</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta
                    name="description"
                    content="A Computer Science portal for geeks. 
         It contains well written, well thought 
         and well explained computer science and 
         programming articles, quizzes and practice/competitive
         programming/company interview Questions."
                />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            {isMobile && <RegisterMobile />}
            {isIpad && <RegisterIpad />}
            {isDesktop && <RegisterDesktop />}
            {isTv && <RegisterTv />}
        </>
    )
}

export default Register