import React from 'react';

// Components

import LoginMoblie from "../Layouts/Mobile/Login";
import LoginDesktop from "../Layouts/Desktop/Login";

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
    isDesktop
  } = useDevice();

  return (
    <>
      {isMobile && <LoginMoblie />}
      {isDesktop && <LoginDesktop />}
    </>
  )
};

export default Login;