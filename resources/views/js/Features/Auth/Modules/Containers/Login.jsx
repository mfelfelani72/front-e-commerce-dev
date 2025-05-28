import { useTranslation } from "react-i18next";

// Components

import LoginMoblie from "../Layouts/Mobile/Login";
import LoginIpad from "../Layouts/Ipad/Login";
import LoginDesktop from "../Layouts/Desktop/Login";
import LoginTv from "../Layouts/Tv/Login";

// Hooks

import useDevice from '../../../../Utils/Hooks/useDevice';
import { Head } from "@inertiajs/react";

const Login = () => {
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
        <title>{t("login")}</title>
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
      {isMobile && <LoginMoblie />}
      {isIpad && <LoginIpad />}
      {isDesktop && <LoginDesktop />}
      {isTv && <LoginTv />}
    </>
  )
};

export default Login;