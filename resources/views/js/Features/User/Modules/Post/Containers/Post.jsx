// Ui

import PostMobile from "../Ui/Mobile/Containers/Post.jsx";
import PostIpad from "../Ui/Ipad/Containers/Post.jsx";
import PostDesktop from "../Ui/Desktop/Containers/Post.jsx";
import PostTv from "../Ui/Tv/Containers/Post.jsx";

// Hooks

import useDevice from "../../../../../Utils/Hooks/useDevice.js";
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
                <title>view - post</title>
                <meta charset="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,
                   initial-scale=1,
                   maximum-scale=1"
                />
                <meta name="description" content="This is post page" />
                <meta
                    http-equiv="Content-Type"
                    content="text/html; charset=utf-8"
                />
            </Head>
            {isMobile && <PostMobile children={children} />}
            {isIpad && <PostIpad children={children} />}
            {isDesktop && <PostDesktop children={children} />}
            {isTv && <PostTv children={children} />}
        </>
    );
};

export default Home;
