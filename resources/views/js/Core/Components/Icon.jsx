// Functions

import { cn } from "../../Utils/Libs/cn";

export const Logo = ({ className, ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 38 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M37.5 37L37.5 18.5C37.5 8.28274 29.2173 1.41726e-05 19 1.28328e-05V1.28328e-05C8.78274 1.1493e-05 0.50001 8.28274 0.500009 18.5L0.500007 37L37.5 37Z"
                    fill="#6938EF"
                />
                <path
                    d="M8.28921 37C8.28921 30.9055 13.2298 25.9649 19.3243 25.9649C25.4188 25.9649 30.3594 30.9055 30.3594 37L8.28921 37Z"
                    fill="#F0276C"
                />
                <path
                    d="M8.28921 37C8.28921 43.0945 13.2298 48.0351 19.3243 48.0351C25.4188 48.0351 30.3594 43.0945 30.3594 37L8.28921 37Z"
                    fill="#EDB500"
                />
                <path
                    d="M19 22.0702C22.0473 22.0702 24.5176 19.5999 24.5176 16.5526C24.5176 13.5054 22.0473 11.0351 19 11.0351C15.9528 11.0351 13.4825 13.5054 13.4825 16.5526C13.4825 19.5999 15.9528 22.0702 19 22.0702Z"
                    fill="#FAFAFF"
                />
            </svg>
        </>
    );
};
export const GoogleLogo = ({ className, ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.4399 11.7502H24.5002V11.7017H14.0002V16.3684H20.5936C19.6317 19.085 17.0469 21.0351 14.0002 21.0351C10.1344 21.0351 7.00016 17.9008 7.00016 14.0351C7.00016 10.1693 10.1344 7.03508 14.0002 7.03508C15.7846 7.03508 17.408 7.70824 18.6441 8.80783L21.944 5.50791C19.8603 3.56599 17.0732 2.36841 14.0002 2.36841C7.55725 2.36841 2.3335 7.59216 2.3335 14.0351C2.3335 20.478 7.55725 25.7017 14.0002 25.7017C20.4431 25.7017 25.6668 20.478 25.6668 14.0351C25.6668 13.2528 25.5863 12.4892 25.4399 11.7502Z" fill="#FFC107" />
                <path d="M3.67871 8.60482L7.51179 11.4159C8.54896 8.84807 11.0608 7.03507 14.0002 7.03507C15.7846 7.03507 17.408 7.70824 18.6441 8.80782L21.944 5.50791C19.8604 3.56599 17.0732 2.36841 14.0002 2.36841C9.51904 2.36841 5.63288 4.89832 3.67871 8.60482Z" fill="#FF3D00" />
                <path d="M14 25.7018C17.0135 25.7018 19.7517 24.5485 21.8219 22.6731L18.2111 19.6176C17.0004 20.5384 15.521 21.0363 14 21.0351C10.9655 21.0351 8.38894 19.1002 7.41827 16.4L3.61377 19.3312C5.5446 23.1095 9.46577 25.7018 14 25.7018Z" fill="#4CAF50" />
                <path d="M25.4398 11.7502H24.5V11.7018H14V16.3684H20.5934C20.1333 17.6614 19.3045 18.7911 18.2093 19.6182L18.2111 19.617L21.8219 22.6725C21.5664 22.9047 25.6667 19.8684 25.6667 14.0351C25.6667 13.2529 25.5862 12.4893 25.4398 11.7502Z" fill="#1976D2" />
            </svg>

        </>
    );
};
export const CloseSquareIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M12.3941 7.59473L7.60211 12.3867"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.3999 12.3928L7.59991 7.59277"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
export const DangerIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.6963 19.2341C19.9193 18.0112 20.5002 15.965 20.5002 12.5381C20.5002 9.11119 19.9193 7.06501 18.6963 5.84204C17.4733 4.61907 15.4271 4.03809 12.0002 4.03809C8.57334 4.03809 6.52717 4.61907 5.3042 5.84204C4.08123 7.06501 3.50024 9.11119 3.50024 12.5381C3.50024 15.965 4.08123 18.0112 5.3042 19.2341C6.52717 20.4571 8.57334 21.0381 12.0002 21.0381C15.4271 21.0381 17.4733 20.4571 18.6963 19.2341ZM19.7569 20.2948C18.0892 21.9626 15.5103 22.5381 12.0002 22.5381C8.49015 22.5381 5.91132 21.9626 4.24354 20.2948C2.57576 18.627 2.00024 16.0482 2.00024 12.5381C2.00024 9.02799 2.57576 6.44916 4.24354 4.78138C5.91132 3.1136 8.49015 2.53809 12.0002 2.53809C15.5103 2.53809 18.0892 3.1136 19.7569 4.78138C21.4247 6.44916 22.0002 9.02799 22.0002 12.5381C22.0002 16.0482 21.4247 18.627 19.7569 20.2948Z"
                    fill={props?.color}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0002 17.1836C11.586 17.1836 11.2502 16.8478 11.2502 16.4336V12.5386C11.2502 12.1244 11.586 11.7886 12.0002 11.7886C12.4145 11.7886 12.7502 12.1244 12.7502 12.5386V16.4336C12.7502 16.8478 12.4145 17.1836 12.0002 17.1836Z"
                    fill={props?.color}
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.7545 9.03809C12.7545 9.4523 12.4187 9.78809 12.0045 9.78809H11.9955C11.5813 9.78809 11.2455 9.4523 11.2455 9.03809C11.2455 8.62387 11.5813 8.28809 11.9955 8.28809H12.0045C12.4187 8.28809 12.7545 8.62387 12.7545 9.03809Z"
                    fill={props?.color}
                />
            </svg>
        </>
    );
};
export const EmailIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.5448 9.01904C17.5448 9.01904 14.3348 12.8717 11.9869 12.8717C9.64004 12.8717 6.39392 9.01904 6.39392 9.01904"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.45203 11.9688C2.45203 5.13075 4.83298 2.85205 11.9758 2.85205C19.1187 2.85205 21.4996 5.13075 21.4996 11.9688C21.4996 18.8059 19.1187 21.0856 11.9758 21.0856C4.83298 21.0856 2.45203 18.8059 2.45203 11.9688Z"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
export const ShowIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.1643 12.0516C15.1643 13.7976 13.7483 15.2136 12.0023 15.2136C10.2563 15.2136 8.84033 13.7976 8.84033 12.0516C8.84033 10.3046 10.2563 8.88965 12.0023 8.88965C13.7483 8.88965 15.1643 10.3046 15.1643 12.0516Z"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.75031 12.052C2.75031 15.332 6.8923 19.354 12.0023 19.354C17.1113 19.354 21.2543 15.335 21.2543 12.052C21.2543 8.769 17.1113 4.75 12.0023 4.75C6.8923 4.75 2.75031 8.772 2.75031 12.052Z"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
export const HideIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.42 17.7298C4.19 16.2698 2.75 14.0698 2.75 12.1398C2.75 8.85984 6.89 4.83984 12 4.83984C14.09 4.83984 16.03 5.50984 17.59 6.54984"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.8497 8.61035C20.7407 9.74035 21.2597 10.9904 21.2597 12.1404C21.2597 15.4204 17.1097 19.4404 11.9997 19.4404C11.0897 19.4404 10.2007 19.3104 9.36969 19.0804"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.76572 14.3667C9.17072 13.7777 8.83772 12.9747 8.84072 12.1377C8.83672 10.3927 10.2487 8.97469 11.9947 8.97169C12.8347 8.96969 13.6407 9.30269 14.2347 9.89669"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.1095 12.6992C14.8755 13.9912 13.8645 15.0042 12.5725 15.2412"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.8917 4.25L4.11768 20.024"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
export const LockIcon = ({ ...props }) => {
    return (
        <>
            <svg
                width={props?.width}
                height={props?.height}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.4709 9.40335V7.25435C16.4399 4.73535 14.3719 2.71935 11.8539 2.75035C9.38691 2.78135 7.39191 4.76735 7.34991 7.23435V9.40335"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.9103 14.1562V16.3773"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.9103 8.82422C6.16531 8.82422 4.25031 10.3922 4.25031 15.0952C4.25031 19.7992 6.16531 21.3672 11.9103 21.3672C17.6553 21.3672 19.5713 19.7992 19.5713 15.0952C19.5713 10.3922 17.6553 8.82422 11.9103 8.82422Z"
                    stroke={props?.color}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </>
    );
};
export const FaceBookIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.3332 16.0351C29.3332 8.67512 23.3598 2.70178 15.9998 2.70178C8.63984 2.70178 2.6665 8.67512 2.6665 16.0351C2.6665 22.4884 7.25317 27.8618 13.3332 29.1018V20.0351H10.6665V16.0351H13.3332V12.7018C13.3332 10.1284 15.4265 8.03512 17.9998 8.03512H21.3332V12.0351H18.6665C17.9332 12.0351 17.3332 12.6351 17.3332 13.3684V16.0351H21.3332V20.0351H17.3332V29.3018C24.0665 28.6351 29.3332 22.9551 29.3332 16.0351Z" fill={props?.color} />
            </svg>

        </>
    );
};
export const TwitterIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.9466 8.0352C28.9199 8.50186 27.8132 8.80853 26.6666 8.9552C27.8399 8.24853 28.7466 7.12853 29.1732 5.78186C28.0666 6.44853 26.8399 6.9152 25.5466 7.18186C24.4932 6.0352 23.0132 5.36853 21.3332 5.36853C18.1999 5.36853 15.6399 7.92853 15.6399 11.0885C15.6399 11.5419 15.6932 11.9819 15.7866 12.3952C11.0399 12.1552 6.81322 9.8752 3.99989 6.42186C3.50656 7.26186 3.22656 8.24853 3.22656 9.28853C3.22656 11.2752 4.22656 13.0352 5.77322 14.0352C4.82656 14.0352 3.94656 13.7685 3.17322 13.3685V13.4085C3.17322 16.1819 5.14656 18.5019 7.75989 19.0219C6.92086 19.2515 6.04002 19.2834 5.18656 19.1152C5.5487 20.2518 6.25794 21.2464 7.21458 21.9591C8.17122 22.6718 9.32715 23.0668 10.5199 23.0885C8.49806 24.6891 5.99188 25.5543 3.41322 25.5419C2.95989 25.5419 2.50656 25.5152 2.05322 25.4619C4.58656 27.0885 7.59989 28.0352 10.8266 28.0352C21.3332 28.0352 27.1066 19.3152 27.1066 11.7552C27.1066 11.5019 27.1066 11.2619 27.0932 11.0085C28.2132 10.2085 29.1732 9.1952 29.9466 8.0352Z" fill={props?.color} />
            </svg>
        </>
    );
};
export const InstagramIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3708 2.70178C18.8708 2.70578 19.6321 2.71378 20.2894 2.73245L20.5481 2.74178C20.8468 2.75245 21.1414 2.76578 21.4974 2.78178C22.9161 2.84845 23.8841 3.07245 24.7334 3.40178C25.6135 3.74045 26.3548 4.19912 27.0961 4.93912C27.7741 5.60564 28.2987 6.4119 28.6335 7.30178C28.9628 8.15112 29.1868 9.11912 29.2535 10.5391C29.2695 10.8938 29.2828 11.1884 29.2935 11.4884L29.3015 11.7471C29.3215 12.4031 29.3295 13.1644 29.3321 14.6644L29.3335 15.6591V17.4058C29.3367 18.3783 29.3265 19.3509 29.3028 20.3231L29.2948 20.5818C29.2841 20.8818 29.2708 21.1764 29.2548 21.5311C29.1881 22.9511 28.9615 23.9178 28.6335 24.7684C28.2997 25.6588 27.7749 26.4653 27.0961 27.1311C26.4294 27.8089 25.6232 28.3335 24.7334 28.6684C23.8841 28.9978 22.9161 29.2218 21.4974 29.2885C21.1811 29.3033 20.8646 29.3167 20.5481 29.3284L20.2894 29.3364C19.6321 29.3551 18.8708 29.3645 17.3708 29.3671L16.3761 29.3685H14.6308C13.6578 29.3718 12.6848 29.3616 11.7121 29.3378L11.4535 29.3298C11.1369 29.3178 10.8205 29.304 10.5041 29.2885C9.08545 29.2218 8.11745 28.9978 7.26678 28.6684C6.37701 28.3343 5.57107 27.8096 4.90545 27.1311C4.22685 26.4648 3.70175 25.6585 3.36678 24.7684C3.03745 23.9191 2.81345 22.9511 2.74678 21.5311C2.73193 21.2147 2.7186 20.8983 2.70678 20.5818L2.70012 20.3231C2.67555 19.3509 2.66444 18.3783 2.66678 17.4058V14.6644C2.66306 13.6919 2.67284 12.7194 2.69612 11.7471L2.70545 11.4884C2.71612 11.1884 2.72945 10.8938 2.74545 10.5391C2.81212 9.11912 3.03612 8.15245 3.36545 7.30178C3.70027 6.41099 4.22641 5.60448 4.90678 4.93912C5.57224 4.26108 6.37764 3.73643 7.26678 3.40178C8.11745 3.07245 9.08412 2.84845 10.5041 2.78178C10.8588 2.76578 11.1548 2.75245 11.4535 2.74178L11.7121 2.73378C12.6844 2.71009 13.6569 2.69987 14.6295 2.70312L17.3708 2.70178ZM16.0001 9.36845C14.232 9.36845 12.5363 10.0708 11.2861 11.3211C10.0358 12.5713 9.33345 14.267 9.33345 16.0351C9.33345 17.8032 10.0358 19.4989 11.2861 20.7492C12.5363 21.9994 14.232 22.7018 16.0001 22.7018C17.7682 22.7018 19.4639 21.9994 20.7142 20.7492C21.9644 19.4989 22.6668 17.8032 22.6668 16.0351C22.6668 14.267 21.9644 12.5713 20.7142 11.3211C19.4639 10.0708 17.7682 9.36845 16.0001 9.36845ZM16.0001 12.0351C16.5254 12.035 17.0456 12.1384 17.5309 12.3393C18.0162 12.5403 18.4572 12.8348 18.8287 13.2062C19.2002 13.5776 19.4949 14.0185 19.696 14.5038C19.8971 14.989 20.0007 15.5092 20.0008 16.0344C20.0009 16.5597 19.8975 17.0799 19.6966 17.5652C19.4956 18.0506 19.2011 18.4916 18.8297 18.8631C18.4583 19.2346 18.0174 19.5293 17.5321 19.7304C17.0469 19.9315 16.5267 20.035 16.0015 20.0351C14.9406 20.0351 13.9232 19.6137 13.173 18.8635C12.4229 18.1134 12.0015 17.096 12.0015 16.0351C12.0015 14.9742 12.4229 13.9568 13.173 13.2067C13.9232 12.4565 14.9406 12.0351 16.0015 12.0351M23.0014 7.36845C22.5594 7.36845 22.1355 7.54404 21.8229 7.8566C21.5104 8.16917 21.3348 8.59309 21.3348 9.03512C21.3348 9.47714 21.5104 9.90107 21.8229 10.2136C22.1355 10.5262 22.5594 10.7018 23.0014 10.7018C23.4435 10.7018 23.8674 10.5262 24.18 10.2136C24.4925 9.90107 24.6681 9.47714 24.6681 9.03512C24.6681 8.59309 24.4925 8.16917 24.18 7.8566C23.8674 7.54404 23.4435 7.36845 23.0014 7.36845Z" fill={props?.color} />
            </svg>

        </>
    );
};
export const LinkdinIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.3333 4.03516C26.0406 4.03516 26.7189 4.31611 27.219 4.8162C27.719 5.3163 28 5.99458 28 6.70182V25.3685C28 26.0757 27.719 26.754 27.219 27.2541C26.7189 27.7542 26.0406 28.0352 25.3333 28.0352H6.66667C5.95942 28.0352 5.28115 27.7542 4.78105 27.2541C4.28095 26.754 4 26.0757 4 25.3685V6.70182C4 5.99458 4.28095 5.3163 4.78105 4.8162C5.28115 4.31611 5.95942 4.03516 6.66667 4.03516H25.3333ZM24.6667 24.7018V17.6352C24.6667 16.4823 24.2087 15.3768 23.3936 14.5616C22.5784 13.7464 21.4728 13.2885 20.32 13.2885C19.1867 13.2885 17.8667 13.9818 17.2267 15.0218V13.5418H13.5067V24.7018H17.2267V18.1285C17.2267 17.1018 18.0533 16.2618 19.08 16.2618C19.5751 16.2618 20.0499 16.4585 20.3999 16.8086C20.75 17.1586 20.9467 17.6334 20.9467 18.1285V24.7018H24.6667ZM9.17333 11.4485C9.76742 11.4485 10.3372 11.2125 10.7573 10.7924C11.1773 10.3723 11.4133 9.80257 11.4133 9.20849C11.4133 7.96849 10.4133 6.95516 9.17333 6.95516C8.57571 6.95516 8.00257 7.19256 7.57999 7.61514C7.1574 8.03772 6.92 8.61087 6.92 9.20849C6.92 10.4485 7.93333 11.4485 9.17333 11.4485ZM11.0267 24.7018V13.5418H7.33333V24.7018H11.0267Z" fill={props?.color} />
            </svg>
        </>
    );
};
export const ProfileIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" stroke={props?.color}></path>
            </svg>
        </>
    );
};
export const SearchIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" stroke={props?.color}></path>
                <path d="M21 21l-6 -6" stroke={props?.color}></path>
            </svg>
        </>
    );
};
export const MenuIcon = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" stroke={props?.color}></path>
                <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" stroke={props?.color}></path>
                <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" stroke={props?.color}></path>
                <path d="M14 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" stroke={props?.color}></path>
            </svg>
        </>
    );
};
export const BlogIcon = ({ className, ...props }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("", className)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"></path>
                <path d="M19 16h-12a2 2 0 0 0 -2 2"></path>
                <path d="M9 8h6"></path>
            </svg>
        </>
    );
};
export const ClockIcon = ({ className, ...props }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cn("", className)}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M12 7v5l3 3"></path>
            </svg>
        </>
    );
};
export const ArrowMenuIcon = ({ className, ...props }) => {
    return (
        <>
            <div className={cn("", className)}>
                <svg width={props?.width} height={props?.height} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7504 8.10683C19.7504 8.23095 19.7174 8.35601 19.6464 8.47058C19.1994 9.19043 15.1914 15.5049 12.0004 15.5049C8.81043 15.5049 4.80143 9.19138 4.35443 8.47058C4.14343 8.13166 4.26143 7.69058 4.61843 7.49009C4.97543 7.28865 5.43543 7.4013 5.64643 7.74118C7.16543 10.1891 10.2334 14.0728 12.0004 14.0728C13.7704 14.0728 16.8374 10.1891 18.3544 7.74118C18.5654 7.4013 19.0254 7.28865 19.3824 7.49009C19.6184 7.62375 19.7504 7.86147 19.7504 8.10683Z" fill={props?.color} />
                </svg>
            </div>
        </>
    );
};
export const WishIcon = ({ ...props }) => {
    return (
        <>
            <div className="relative">
                <svg width={props?.width} height={props?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" stroke={props?.color}></path>
                </svg>
                {props?.count > 0 &&
                    <>
                        <span className="absolute inset-0 -mt-[0.05rem] left-[1.2rem] h-[0.85rem] w-[0.85rem] animate-ping bg-violet-600 rounded-full"></span>
                        <span className="absolute inset-0 -mt-1 left-full rounded-full h-5 w-5 -ml-2 bg-violet-600 text-white text-center font-semibold text-sm">
                            {props?.count}
                        </span>
                    </>
                }

            </div>

        </>
    );
};
export const BasketIcon = ({ ...props }) => {
    return (
        <>
            <div className="relative">
                <svg width={props?.width} height={props?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M6.331 8h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1 -2.966 2.544h-6.852a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304z" stroke={props?.color}></path>
                    <path d="M9 11v-5a3 3 0 0 1 6 0v5" stroke={props?.color}></path>
                </svg>
                {props?.count > 0 &&
                    <>
                        <span className="absolute inset-0 -mt-[0.05rem] left-[1.2rem] h-[0.85rem] w-[0.85rem] animate-ping bg-violet-600 rounded-full"></span>
                        <span className="absolute inset-0 -mt-1 left-full rounded-full h-5 w-5 -ml-2 bg-violet-600 text-white text-center font-semibold text-sm">
                            {props?.count}
                        </span>
                    </>
                }

            </div>

        </>
    );
};
