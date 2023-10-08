import React from "react";

const getType = (type) => {
  switch (type) {
    case "long":
      return "block w-96 h-14 p-4 bg-sky-500 text-white font-semibold rounded-none";
    case "longwhite":
      return "block w-96 h-14 p-4 bg-white text-black font-semibold rounded-none";
    case "small":
      return "block w-24 h-14 p-4 bg-gray-600 text-white font-semibold rounded-none";
    case "addPhoto":
      return "flex items-center align-middle w-20 h-6 px-3.5 py-1 leading-normal text-center border border-gray-300 bg-gray-100";
    case "deletePhoto":
      return "flex items-center align-middle w-20 h-6 px-3.5 py-1 leading-normal text-center border border-gray-300 bg-gray-100";
    case "withTextInput":
      return "w-28 h-14 px-4 rounded-xl bg-sky-100 text-sky-500";
  }
};

export const Button = ({ type, label, onClick, ...props }) => {
  return (
    <button
      type={type}
      label={label}
      className={getType(type)}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {label}
    </button>
  );
};
