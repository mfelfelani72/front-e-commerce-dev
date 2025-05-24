import React from 'react'
import { useTranslation } from 'react-i18next'

// Components

import { GoogleLogo } from "./Icon"

// Functions

import { cn } from '../../../app/Utils/Libs/cn'

export const GoogleButton = ({ classname, ...props }) => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <button className={cn("h-12 w-full border border-gray-200 rounded-lg inline-flex items-center justify-center font-medium text-sm cursor-pointer hover:bg-violet-50 focus:bg-violet-200 focus:outline-none select-none", classname)}>
                <div className='inline-flex items-center gap-2 '>
                    <div> <GoogleLogo width="28" height="28" /> </div>
                    <div>{t("text_google_button")}</div>
                </div>
            </button>
        </>
    )
}
