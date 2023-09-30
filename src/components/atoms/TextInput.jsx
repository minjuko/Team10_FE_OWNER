import React, { useMemo } from "react";

const BASE_INPUT_CLASSES =
  "border border-gray-300 bg-gray-100 w-393 h-54 focus:outline-none focus:border-blue-500";
const getType = (type) => {
  switch (type) {
    case "alone":
      return "border border-gray-300 bg-gray-100 w-393 h-54 focus:outline-none focus:border-blue-500";
    case "withbutton":
      return "w-64 h-14 px-4 mr-4 rounded-xl border-gray-300 bg-gray-100";
    default:
      return "";
  }
};
export const TextInput = ({ placeholder, type, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${getType(type)}`}
    />
  );
};
