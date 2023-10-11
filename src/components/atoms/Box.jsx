import React from "react";

const commonStyle =
  "flex flex-col justify-center items-center gap-4 border border-gray-300 rounded-xl";

const types = {
  small: "w-[496px] h-[441px] bg-white",
  medium: "w-[496px] h-[625px] bg-white",
  registerBox: "w-[913px] h-[907px] bg-white",
  keypointBox: "w-[384px] h-[139px] bg-gray-100",
  default: "w-96 w-10",
};

const Box = ({ className, children }) => {
  return (
    <div className={`p-14 bg-white rounded-xl shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Box;
