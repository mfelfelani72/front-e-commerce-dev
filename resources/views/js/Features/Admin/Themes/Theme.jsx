import { Link, router } from "@inertiajs/react";

// Layouts

import ThemeMoblie from "./Layouts/Mobile/Theme.jsx"
import ThemeIpad from "./Layouts/Ipad/Theme.jsx"
import ThemeDesktop from "./Layouts/Desktop/Theme.jsx"
import ThemeTv from "./Layouts/Tv/Theme.jsx"

// Hooks

import useDevice from "../../../Utils/Hooks/useDevice.js";

const Theme = ({ children }) => {
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

export default Theme;
