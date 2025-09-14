import React, { useState } from "react";

// Components

import { ArrowMenuIcon } from "../Features/User/Components/Icon.jsx";

// Functions

import { cn } from "../Utils/Libs/cn.js";

const Accordion = ({ parentClassName, className, children, ...props }) => {
    // states
    const [isOpen, setIsOpen] = useState(props?.open ? props?.open : false);

    // functions
    const toggleOpen = () => {
        if (!props?.sliding && props?.sliding !== false) setIsOpen(!isOpen);
    };
    return (
        <>
            <div
                className={cn(
                    "flex flex-row w-full items-start justify-between bg-white rounded-2xl",
                    className
                )}
            >
                <div className="flex flex-col w-full">
                    <div
                        onClick={toggleOpen}
                        className={cn(
                            "flex flex-row justify-between items-center",
                            !props?.sliding &&
                                props?.sliding !== false &&
                                "cursor-pointer"
                        )}
                    >
                        <div className="flex flex-row gap-2">
                            {props?.icon && (
                                <span className="bg-secondary-50 dark:bg-background-light rounded-full">
                                    {props?.icon}
                                </span>
                            )}

                            <div
                                className={cn(
                                    "text-Neutral-500 dark:text-white text-base font-medium inline-flex items-center select-none",
                                    props.title_classname
                                )}
                            >
                                {props?.title}{" "}
                            </div>
                        </div>

                        {!props?.sliding && props?.sliding !== false && (
                            <ArrowMenuIcon
                                className={`w-4 h-4 rtl:rotate-[90deg] ltr:-rotate-[90deg] transition-all duration-300 ${
                                    isOpen
                                        ? "rtl:rotate-0 ltr:-rotate-0"
                                        : "rtl:rotate-[90deg]"
                                }`}
                            />
                        )}
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isOpen ? "opacity-100 mt-0" : "max-h-0 opacity-0"
                        }`}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;
