import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { GoogleLogo } from "../Features/User/Components/Icon";

// Functions

import { cn } from "../Utils/Libs/cn";

// Zustand

import useAppStore from "../Stores/AppStore";

export const Button = ({ children, className, ...props }) => {
    return (
        <>
            <button
                {...props}
                className={cn(
                    "h-14 w-full flex flex-row justify-center items-center rounded-2xl bg-violet-500 hover:bg-violet-400 focus:bg-violet-600 focus:outline-none select-none text-white cursor-pointer",
                    className
                )}
            >
                <div className="flex flex-row gap-2 ">{children}</div>
            </button>
        </>
    );
};
export const GoogleButton = ({ classname, ...props }) => {
    // hooks
    const { t } = useTranslation();

    // functions
    const handleClick = (type) => {
        console.log(type);
    };
    return (
        <>
            <button
                className={cn(
                    "h-12 w-full border border-gray-200 rounded-lg inline-flex items-center justify-center font-medium text-sm cursor-pointer hover:bg-violet-50 focus:bg-violet-200 focus:outline-none select-none",
                    classname
                )}
            >
                <div
                    onClick={() => handleClick(props?.type)}
                    className="inline-flex items-center gap-2 "
                >
                    <div>
                        {" "}
                        <GoogleLogo width="28" height="28" />{" "}
                    </div>
                    <div>{t(`${props?.type}_google_button`)}</div>
                </div>
            </button>
        </>
    );
};
export const SubmitButton = ({ children, className, ...props }) => {
    return (
        <>
            <button
                {...props}
                className={cn(
                    "h-14 w-full flex flex-row justify-center items-center rounded-2xl bg-violet-500 hover:bg-violet-400 focus:bg-violet-600 focus:outline-none select-none text-white cursor-pointer",
                    className
                )}
            >
                <div className="flex flex-row gap-2 ">{children}</div>
            </button>
        </>
    );
};
export const TextButton = ({ text, className, ...props }) => {
    return (
        <>
            <div
                {...props}
                className={cn(
                    "select-none text-violet-500 cursor-pointer",
                    className
                )}
            >
                {text}
            </div>
        </>
    );
};
export const ButtonNoLink = ({ children, className, ...props }) => {
    // states
    const themeColor = useAppStore((state) => state.themeColor);
    return (
        <>
            <div
                {...props}
                className={cn(
                    `inline-flex h-14 px-4 justify-center items-center rounded-2xl bg-${themeColor} dark:bg-${themeColor} hover:bg-${themeColor} focus:bg-${themeColor} focus:outline-none select-none text-Textlight dark:text-Text-dark transition-all cursor-pointer`,
                    className
                )}
            >
                <div className="flex flex-row items-center justify-center w-full gap-2 text-center whitespace-nowrap">
                    {children}
                </div>
            </div>
        </>
    );
};
