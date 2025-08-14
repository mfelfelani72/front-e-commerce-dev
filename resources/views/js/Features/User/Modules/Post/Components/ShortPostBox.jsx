import React from "react";

// Functions

import { cn } from "../../../../../Utils/Libs/cn";

// png

import blog_image from "../../../../../../../../public/assets/image/short-blog.jpg";

const ShortPostBox = ({ className, ...props }) => {
    return (
        <>
            <div className={cn("flex flex-row w-full h-full", className)}>
                <div className="w-20 h-full">
                    <img
                        src={blog_image}
                        alt="blog"
                        loading="lazy"
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col px-2">
                    <div className="text-gray-600 font-bold">blog title</div>
                    <div className="text-gray-400 text-sm font-medium">February 10, 2021-2022</div>
                    <div className="text-violet-500">- category</div>
                </div>
            </div>
        </>
    );
};

export default ShortPostBox;
