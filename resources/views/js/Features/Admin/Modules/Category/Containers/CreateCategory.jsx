// Ui

import CreateCategoryMobile from "../Ui/Mobile/Containers/CreateCategory.jsx"
import CreateCategoryIpad from "../Ui/Ipad/Containers/CreateCategory.jsx"
import CreateCategoryDesktop from "../Ui/Desktop/Containers/CreateCategory.jsx"
import CreateCategoryTv from "../Ui/Tv/Containers/CreateCategory.jsx"

// Hooks

import useDevice from "../../../../../Utils/Hooks/useDevice.js";

const CreateCategory = ({ children }) => {
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
            {isMobile && <CreateCategoryMobile children={children} />}
            {isIpad && <CreateCategoryIpad children={children} />}
            {isDesktop && <CreateCategoryDesktop children={children} />}
            {isTv && <CreateCategoryTv children={children} />}
        </>
    );
};

export default CreateCategory;
