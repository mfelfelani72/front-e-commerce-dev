import React from 'react';

// Components

import LoginMoblie from "../Layouts/Mobile/Login";
import LoginIpad from "../Layouts/Ipad/Login";
import LoginDesktop from "../Layouts/Desktop/Login";
import LoginTv from "../Layouts/Tv/Login";

// Hooks

import useDevice from '../../../../Utils/Hooks/useDevice';

const Login = () => {

  // hooks
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
      {isMobile && <LoginMoblie />}
      {isIpad && <LoginIpad />}
      {isDesktop && <LoginDesktop />}
      {isTv && <LoginTv />}
    </>
  )
};

export default Login;