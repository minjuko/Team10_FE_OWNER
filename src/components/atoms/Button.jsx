import React from "react";

const getType = (type) => {
  switch (type) {
    case "long":
      return "block w-96 h-14 p-4 bg-sky-500 text-white font-semibold rounded-none";
    case "small":
      return "block w-24 h-14 p-4 bg-gray-600 text-white font-semibold rounded-none";
    case "addPhoto":
      return "block w-16 h-16 p-4 bg-gray-100 text-gray-600 font-semibold rounded-none";
    case "withTextInput":
      return "w-28 h-14 px-4 rounded-xl bg-blue-100 text-blue-500";
  }
};

export const Button = ({ type, label, ...props }) => {
  return (
    <button
      type={type}
      label={label}
      className={`${getType(type)} `}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {label}
    </button>
  );
};
