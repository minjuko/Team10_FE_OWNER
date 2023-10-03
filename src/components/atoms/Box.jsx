import React from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "w-[496px] h-[441px] border-gray-300 bg-white";
    }
    case "medium": {
      return "w-[496px] h-[625px] border-gray-300 bg-white";
    }
    case "registerbox": {
      return "w-[913px] h-[907px] border-gray-300 bg-white";
    }
    case "keypointbox": {
      return "w-[384px] h-[139px] rounded-xl border border-gray-300 bg-gray-100";
    }
    default: {
      return "w-96 w-10";
    }
  }
};

const BASE_BOX_CLASSES =
  "flex flex-col justify-center items-center gap-4 border rounded-xl";

export const Box = ({ className, children, size }) => {
  const sizeClass = getSizeClasses(size);
  return <div className={`${BASE_BOX_CLASSES} ${sizeClass}`}>{children}</div>;
};
