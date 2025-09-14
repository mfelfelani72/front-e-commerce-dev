// Ui

import CreatePostMobile from "../Ui/Mobile/Containers/CreatePost.jsx"
import CreatePostIpad from "../Ui/Ipad/Containers/CreatePost.jsx"
import CreatePostDesktop from "../Ui/Desktop/Containers/CreatePost.jsx"
import CreatePostTv from "../Ui/Tv/Containers/CreatePost.jsx"

// Hooks

import useDevice from "../../../../../Utils/Hooks/useDevice.js";

const PostLists = ({ children }) => {
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
            {isMobile && <CreatePostMobile children={children} />}
            {isIpad && <CreatePostIpad children={children} />}
            {isDesktop && <CreatePostDesktop children={children} />}
            {isTv && <CreatePostTv children={children} />}
        </>
    );
};

export default PostLists;
