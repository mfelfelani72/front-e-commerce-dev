import { Link, router } from "@inertiajs/react";

// Layouts

import ThemeMoblie from "./Ui/Mobile/Layout.jsx"
import ThemeIpad from "./Ui/Ipad/Layout.jsx"
import ThemeDesktop from "./Ui/Desktop/Layout.jsx"
import ThemeTv from "./Ui/Tv/Layout.jsx"

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
            {isMobile && <ThemeMoblie children={children} />}
            {isIpad && <ThemeIpad children={children} />}
            {isDesktop && <ThemeDesktop children={children} />}
            {isTv && <ThemeTv children={children} />}
        </>
    );
};

export default Layout;
