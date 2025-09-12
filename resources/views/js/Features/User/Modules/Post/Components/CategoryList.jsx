import React from "react";

// Functions

import { cn } from "../../../../../Utils/Libs/cn";

const CategoryList = ({ className, ...props }) => {
    return (
        <>
            <div
                className={cn(
                    "flex flex-row items-center justify-between",
                    className
                )}
            >
                <div className="flex flex-row gap-2">
                    <div className="flex flex-row">
                        <input type="checkbox" />
                    </div>
                    <div className="flex flex-row text-md text-gray-400 font-medium">
                        {props?.title}
                    </div>
                </div>
                <div className="flex flex-row text-md text-gray-400 font-medium">
                    {props?.count}
                </div>
            </div>
        </>
    );
};

export default CategoryList;
