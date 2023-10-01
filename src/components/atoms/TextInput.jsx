import React, { useMemo } from "react";

const BASE_INPUT_CLASSES =
  "border border-gray-300 bg-gray-100 w-393 h-54 focus:outline-none focus:border-blue-500";
const getType = (type) => {
  switch (type) {
    case "alone":
      return "border border-gray-300 bg-gray-100 w-393 h-54 focus:outline-none focus:border-blue-500";
    case "register":
      return "w-64 h-14 px-4 mr-4 rounded-xl border-gray-300 bg-gray-100";
    case "email":
      return "w-96 h-14 px-4 mr-4 rounded-xl border-gray-300 bg-gray-100";
    case "password":
      return "w-96 h-14 px-4 mr-4 rounded-xl border-gray-300 bg-gray-100";
    default:
      return "";
  }
};
export const TextInput = ({
  placeholder,
  id,
  type,
  value,
  onChange,
  ...props
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${getType(type)}`}
    />
  );
};
