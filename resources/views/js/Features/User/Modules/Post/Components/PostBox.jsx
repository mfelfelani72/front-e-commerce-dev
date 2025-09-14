// Components

import { ClockIcon } from "../../../../../Components/Icon";

// Functions

import { cn } from "../../../../../Utils/Libs/cn";
import navigate from "../../../../../Utils/Libs/navigate";

// Images

import picture from "../../../../../../../../public/assets/image/blog-img-1.jpg";

const PostBox = ({ className, ...props }) => {
    return (
        <div
            {...props}
            className={cn(
                "group flex flex-col bg-gray-50 shadow-sm rounded-lg max-h-[24.5rem] min-h-[24.5rem] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl overflow-hidden cursor-pointer",
                className
            )}
        >
            <div className="overflow-hidden min-h-[10rem]">
                <img
                    loading="lazy"
                    src={picture}
                    alt="picture"
                    className={
                        "object-cover w-full h-full transition-transform duration-600 ease-in-out hover:rotate-1 hover:scale-105"
                    }
                />
                <div className="absolute -translate-y-full group-hover:translate-y-0 top-0 inset-x-0 w-full bg-violet-100/90 py-1 px-2 rounded-none transition-transform duration-600 ease-in-out">
                    <div className="text-gray-900 text-xs">
                        2015/06/21 - 19:43
                    </div>
                </div>
            </div>

            <div className="p-4 flex flex-col h-full justify-between">
                <div>
                    <h3
                        onClick={() =>
                            navigate("/posts/view-post", "get", {
                                id: "23"
                            })
                        }
                        className="font-medium hover:text-violet-600"
                    >
                        this is a title
                    </h3>
                    <p className="text-gray-400 text-sm pt-1">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Fugiat quae nobis dolor possimus. Animi, saepe?
                        Ipsam nam cum dignissimos labore ipsa delectus
                        necessitatibus tempore asperiores eligendi deserunt a,
                        amet ex.
                    </p>
                </div>
                <div className="flex flex-row-reverse items-center gap-1 group-hover:animate-bounce">
                    <div className="text-xs text-gray-500">
                        <span className="font-bold">15</span> min
                    </div>
                    <ClockIcon className={"h-4 w-4 text-gray-400"} />
                </div>
            </div>
        </div>
    );
};

export default PostBox;
