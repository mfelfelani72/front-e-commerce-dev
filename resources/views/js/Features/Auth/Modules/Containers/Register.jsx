// Components

import RegisterMobile from '../Layouts/Mobile/Register.jsx';
import RegisterIpad from '../Layouts/Ipad/Register.jsx';
import RegisterDesktop from '../Layouts/Desktop/Register.jsx';
import RegisterTv from '../Layouts/Tv/Register.jsx';

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
        isDesktop,
        isTv,
    } = useDevice();

    return (
        <>
            {isMobile && <RegisterMobile />}
            {isIpad && <RegisterIpad />}
            {isDesktop && <RegisterDesktop />}
            {isTv && <RegisterTv />}
        </>
    )
}

export default Register