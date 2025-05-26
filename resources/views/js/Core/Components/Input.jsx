import { useTranslation } from "react-i18next";

// Components

import { CloseSquareIcon, DangerIcon, EmailIcon, ShowIcon, HideIcon, LockIcon } from "./Icon"

// Functions

import { cn } from "../../Utils/Libs/cn";

const handleClear = (id, first_id, secound_id, afterFunction) => {
    const Button1 = document.getElementById(first_id);
    const Button2 = document.getElementById(secound_id);
    if (Button1 && Button2) {
        Button1.classList.add("hidden");
        Button1.classList.remove("flex");
        Button2.classList.add("flex");
        Button2.classList.remove("hidden");
    }
    document.getElementById(id).value = "";

    if (afterFunction) {
        afterFunction();
    }
};
//  --> for toggle ShowIcon/hidden password
const handleShow = (id) => {
    const input = document.getElementById(id);
    if (input.type === "text") {
        input.type = "password";
        document.getElementById(id + "-ShowIcon").classList.toggle("hidden");
        document.getElementById(id + "-HideIcon").classList.toggle("hidden");
    } else {
        input.type = "text";
        document.getElementById(id + "-ShowIcon").classList.toggle("hidden");
        document.getElementById(id + "-HideIcon").classList.toggle("hidden");
    }
};
// --> for compare ch_password and ch_confirm_password
const comparePassword = (event, button_id) => {
    const ch_password = document.getElementById("ch_password");
    const email = document.getElementById("email");
    const Button1 = document.getElementById(button_id);
    const Button2 = document.getElementById(`${button_id}_disable`);

    if (ch_password.value !== event.target.value) {
        Button1.classList.add("hidden");
        Button1.classList.remove("flex");
        Button2.classList.add("flex");
        Button2.classList.remove("hidden");
    }

    if (
        ch_password.value.slice(0, event.target.value.length) !== event.target.value
    ) {
        event.target.classList.add("!focus:border-Error-400", "!border-Error-400");
        document.getElementById("error_message").classList.remove("hidden");
    } else {
        if (ch_password.value === event.target.value && ch_password.value.length !== 0 && event.target.value.length !== 0) {
            Button1.classList.add("flex");
            Button1.classList.remove("hidden");
            Button2.classList.add("hidden");
            Button2.classList.remove("flex");
            document.getElementById("error_message").classList.add("hidden");
            event.target.classList.remove(
                "!focus:border-Error-400",
                "!border-Error-400"
            );
        }
    }
};

export const InputEmail = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <label
                htmlFor={props?.id}
                className="text-xs font-medium text-gray-500 px-1 pb-2"
            >
                {props?.label}
            </label>

            <div className="relative mt-1">

                <input
                    {...props}
                    pattern="[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[a-zA-Z]{2,}(:[0-9]{1,5})?"
                    type="email"
                    placeholder={props?.placeholder}
                    className={cn(
                        "autofill-input-dark peer placeholder:text-gray-400 placeholder:text-sm w-full px-[2.7rem] py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0 focus:border-violet-400  justify-between items-center relative",
                        className
                    )}
                    onBlur={() => {
                        if (document.getElementById("input_email_validate"))
                            document
                                .getElementById("input_email_validate")
                                .classList.add("hidden");
                    }}
                    onFocus={() => {
                        document.getElementById("danger_email").classList.add("hidden");
                        document.getElementById("close_email").classList.remove("hidden");
                        document.getElementById("close_email").classList.add("flex");
                    }}
                />
                <div
                    id="close_email"
                    className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center"
                >
                    {props?.disabled !== "disabled" && (
                        <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
                            <div className="p-2">
                                <div className="flex cursor-pointer px-1" onClick={() => handleClear(props?.id)}>
                                    <CloseSquareIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div
                    id="danger_email"
                    className="hidden absolute top-[6px] rtl:left-0 ltr:right-0 items-center "
                >
                    <div className="p-2">
                        <div className="flex">
                            <DangerIcon width={"24"} height={"24"} color={"#d71e1e"} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
                    <div className="flex">
                        <EmailIcon width={"24"} height={"24"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                    </div>
                </div>
                {/* input validate */}
                {props?.error !== "" && (
                    <div
                        id="input_email_validate"
                        className="peer-focus:hidden absolute inset-x-0 mt-1 mx-1"
                    >
                        <div className="text-red-500 text-xs font-medium">
                            {t(props?.error)}
                        </div>
                    </div>
                )}
                <div className={`hidden peer-invalid:flex absolute mt-1 mx-1`}>
                    <div className="text-red-500 text-xs font-medium">
                        {t("error_invalid_email")}</div>
                </div>

                {/* input validate */}
            </div>
        </>
    );
};
export const InputPassword = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();

    return (
        <>
            <label
                htmlFor={props?.id}
                className="text-xs font-medium text-gray-500 px-1 mb-2"
            >
                {props?.label}
            </label>
            {/* password */}
            {props?.type == "password" && (
                <>
                    <div className="w-full relative mt-1">
                        <input
                            {...props}
                            type="password"
                            minLength={5}
                            placeholder="XXXXX"
                            className={cn(
                                "autofill-input-dark peer placeholder:text-gray-400 placeholder:text-sm w-full px-[2.5rem] py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0 focus:border-violet-400 justify-between items-center relative",
                                className
                            )}
                            onBlur={() => {
                                document
                                    .getElementById("input_password_validate")
                                    .classList.add("hidden");
                            }}
                            onFocus={() => {
                                document
                                    .getElementById("danger_password")
                                    .classList.add("hidden");
                                document
                                    .getElementById("close_password")
                                    .classList.remove("hidden");
                                document.getElementById("close_password").classList.add("flex");
                            }}
                        />
                        <div
                            id="close_password"
                            className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center"
                        >

                            <div
                                className="flex"
                                onClick={() =>
                                    handleClear(
                                        props?.id,
                                        props?.button_first_id,
                                        props?.button_secound_id
                                    )
                                }
                            >
                                <CloseSquareIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                            </div>

                        </div>
                        <div
                            id="danger_password"
                            className="hidden absolute top-[6px] rtl:left-0 ltr:right-0 items-center "
                        >
                            <div className="p-2">
                                <div className="flex">
                                    <DangerIcon width={"24"} height={"24"} color={"#d71e1e"} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
                            <div className="">
                                <div className="flex">
                                    <LockIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                                </div>
                            </div>
                        </div>
                        {/* input validate */}
                        {props?.error !== "" && (
                            <div
                                id="input_password_validate"
                                className="peer-focus:hidden absolute mt-1 mx-1"
                            >
                                <div className="text-red-500 text-xs font-medium">{t(props?.error)}</div>
                            </div>
                        )}
                        <div className="hidden peer-invalid:flex absolute my-1 mx-1">
                            <div className="text-red-500 text-xs font-medium">
                                {t("error_min_length_password")}
                            </div>
                        </div>
                        {/* input validate */}
                    </div>
                </>
            )}

            {/* change_password */}
            {props?.type == "change_password" && (
                <div className="w-full relative mt-1">
                    <input
                        {...props}
                        type="password"
                        minLength={5}
                        placeholder="xxxxx"
                        className="autofill-input-dark peer placeholder:text-gray-400 placeholder:text-sm w-full px-[2.7rem] py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0 focus:border-violet-400 invalid:focus:border-Error-400 invalid:border-Error-400 justify-between items-center relative"
                    />
                    <div className=" absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center cursor-pointer">
                        <div
                            className="flex"
                            onClick={() => handleShow(props?.id)}
                        >
                            <div id={props?.id + "-ShowIcon"} className="">
                                <ShowIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                            </div>
                            <div id={props?.id + "-HideIcon"} className="hidden">
                                <HideIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
                        <div className="flex">
                            <LockIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                        </div>
                    </div>
                    <div className="hidden peer-invalid:flex absolute my-1 mx-1">
                        <div className="text-red-500 text-xs font-medium">
                            {t("error_min_length_password")}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export const InputRePassword = ({ ...props }) => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <label
                htmlFor={props?.id}
                className="text-xs font-medium text-gray-500 px-1 mb-2"
            >
                {props?.label}
            </label>
            <div className="w-full relative mt-1">
                <input
                    id={props?.id}
                    type="password"
                    placeholder="xxxxx"
                    className="autofill-input-dark placeholder:text-gray-400 placeholder:text-sm w-full px-[2.7rem] py-3 rounded-lg bg-white border border-gray-200 focus:outline-none focus:ring-0 focus:border-violet-400 justify-between items-center relative"
                    onChange={(event) => comparePassword(event, props?.button_id)}
                />
                <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center cursor-pointer">
                    <div
                        className="flex"
                        onClick={() => handleShow(props?.id)}
                    >
                        <div id={props?.id + "-ShowIcon"} className="">
                            <ShowIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                        </div>
                        <div id={props?.id + "-HideIcon"} className="hidden">
                            <HideIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                        </div>
                    </div>
                </div>
                <div
                    id="danger_ch_confirm_password"
                    className="hidden absolute top-[6px] rtl:left-0 ltr:right-0 items-center "
                >
                    <div className="p-2">
                        <div className="flex">
                            <DangerIcon width={"24"} height={"24"} color={"#d71e1e"} />
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
                    <div className="flex">
                        <LockIcon width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                    </div>
                </div>
                {/* input validate */}
                {props?.error !== "" && (
                    <div
                        id="input_password_validate"
                        className="peer-focus:hidden absolute mt-1 mx-1"
                    >
                        <div className="text-red-500 text-xs font-medium">{t(props?.error)}</div>
                    </div>
                )}
                <div id="error_message" className="hidden absolute mt-1 mx-1">
                    <div className="text-red-500 text-xs font-medium">
                        {t("error_re_password")}
                    </div>
                </div>
            </div>
        </>
    );
};