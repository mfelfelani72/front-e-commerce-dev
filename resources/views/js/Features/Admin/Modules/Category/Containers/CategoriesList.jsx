// Ui

import CategoriesListMobile from "../Ui/Mobile/Containers/CategoriesList.jsx"
import CategoriesListIpad from "../Ui/Ipad/Containers/CategoriesList.jsx"
import CategoriesListDesktop from "../Ui/Desktop/Containers/CategoriesList.jsx"
import CategoriesListTv from "../Ui/Tv/Containers/CategoriesList.jsx"

// Hooks

import useDevice from "../../../../../Utils/Hooks/useDevice.js";

const CategoriesList = ({ children }) => {
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
            {isMobile && <CategoriesListMobile children={children} />}
            {isIpad && <CategoriesListIpad children={children} />}
            {isDesktop && <CategoriesListDesktop children={children} />}
            {isTv && <CategoriesListTv children={children} />}
        </>
    );
};

export default CategoriesList;
