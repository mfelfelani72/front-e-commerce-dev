import React from "react";


// Functions

import { cn } from "../../../app/Utils/Libs/cn";

// Svg

import loader from "../../../public/assets/svg/icon/12-dots-scale-rotate.svg";

const LoaderDotSpinner = ({ className, ...props }) => {
  return (
    <img
      {...props}
      alt="loader"
      src={loader}
      className={cn("absolute w-6 h-6 mx-4 invert-[100%]", className)}
    />
  );
};

export default LoaderDotSpinner;
