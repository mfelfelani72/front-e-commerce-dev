import { Link, router } from "@inertiajs/react";

// Layouts

import LayoutMobile from "./Mobile/Layout.jsx"
import LayoutIpad from "./Ipad/Layout.jsx"
import LayoutDesktop from "./Desktop/Layout.jsx"
import LayoutTv from "./Tv/Layout.jsx"

// Hooks

import useDevice from "../../../Utils/Hooks/useDevice.js";

const Layout = ({ children }) => {
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
            {isMobile && <LayoutMobile children={children} />}
            {isIpad && <LayoutIpad children={children} />}
            {isDesktop && <LayoutDesktop children={children} />}
            {isTv && <LayoutTv children={children} />}
        </>
    );
};

export default Layout;
