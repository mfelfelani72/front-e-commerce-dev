import React, { useState } from 'react'
// Components

import RegisterMobile from '../Layouts/Mobile/Register.jsx';
import RegisterDesktop from '../Layouts/Desktop/Register.jsx';

// Hooks

import useDevice from '../../../../Utils/Hooks/useDevice.js';

const Register = () => {

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
            {isMobile && <RegisterMobile />}
            {isDesktop && <RegisterDesktop />}
        </>
    )
}

export default Register