// Ui

import PostsListMobile from "../Ui/Mobile/Containers/PostsList.jsx"
import PostsListIpad from "../Ui/Ipad/Containers/PostsList.jsx"
import PostsListDesktop from "../Ui/Desktop/Containers/PostsList.jsx"
import PostsListTv from "../Ui/Tv/Containers/PostsList.jsx"

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
            {isMobile && <PostsListMobile children={children} />}
            {isIpad && <PostsListIpad children={children} />}
            {isDesktop && <PostsListDesktop children={children} />}
            {isTv && <PostsListTv children={children} />}
        </>
    );
};

export default PostLists;
