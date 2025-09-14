// Ui

import LatestBlogsMobile from "../Ui/Mobile/Containers/LatestBlogs.jsx";
import LatestBlogsIpad from "../Ui/Ipad/Containers/LatestBlogs.jsx";
import LatestBlogsDesktop from "../Ui/Desktop/Containers/LatestBlogs.jsx";
import LatestBlogsTv from "../Ui/Tv/Containers/LatestBlogs.jsx";

// Hooks

import useDevice from "../../../../../Utils/Hooks/useDevice.js";

const LatestBlogs = ({ children }) => {
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
            {isMobile && <LatestBlogsMobile children={children} />}
            {isIpad && <LatestBlogsIpad children={children} />}
            {isDesktop && <LatestBlogsDesktop children={children} />}
            {isTv && <LatestBlogsTv children={children} />}
        </>
    );
};

export default LatestBlogs;
