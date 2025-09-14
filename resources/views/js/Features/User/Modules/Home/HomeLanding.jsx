// Ui

import HomeLandingMobile from "./Ui/Mobile/Containers/HomeLanding.jsx";
import HomeLandingIpad from "./Ui/Ipad/Containers/HomeLanding.jsx";
import HomeLandingDesktop from "./Ui/Desktop/Containers/HomeLanding.jsx";
import HomeLandingTv from "./Ui/Tv/Containers/HomeLanding.jsx";

// Hooks

import useDevice from "../../../../Utils/Hooks/useDevice.js";
import { Head } from "@inertiajs/react";

const Home = ({ children }) => {
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
         <Head>
                <title>Home</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta
                    name="description"
                    content="This is home page"
                />
                <meta name="description" content="content" />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            {isMobile && <HomeLandingMobile children={children} />}
            {isIpad && <HomeLandingIpad children={children} />}
            {isDesktop && <HomeLandingDesktop children={children} />}
            {isTv && <HomeLandingTv children={children} />}
        </>
    );
};

export default Home;

