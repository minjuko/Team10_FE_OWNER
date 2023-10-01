import React from "react";

const getSizeClasses = (size) => {
  switch (size) {
    case "small": {
      return "w-[496px] h-[441px]";
    }
    case "medium": {
      return "w-[496px] h-[625px]";
    }
    default: {
      return "w-96 w-10";
    }
  }
};

const BASE_BOX_CLASSES =
  "flex flex-col justify-center items-center gap-4 border rounded-xl border-gray-300 bg-white";

export const Box = ({ className, children, size }) => {
  const sizeClass = getSizeClasses(size);
  return <div className={`${BASE_BOX_CLASSES} ${sizeClass}`}>{children}</div>;
};
