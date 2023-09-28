import React from "react";

const getType = (type) => {
  switch (type) {
    case "long":
      return "block w-96 h-14 p-4 bg-sky-500 text-white font-semibold rounded-none";
    case "small":
      return "block w-24 h-14 p-4 bg-gray-600 text-white font-semibold rounded-none";
    case "addPhoto":
      return "block w-16 h-16 p-4 bg-gray-100 text-gray-600 font-semibold rounded-none";
  }
};

export const Button = ({ type = "long", label, ...props }) => {
  return (
    <button type="button" className={`${getType(type)}`} {...props}>
      {label}
    </button>
  );
};
