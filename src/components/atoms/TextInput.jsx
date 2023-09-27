import React, { useMemo } from 'react';

const BASE_INPUT_CLASSES =
  'border border-gray-300 bg-gray-100 w-393 h-54 focus:outline-none focus:border-blue-500';

export const TextInput = ({ placeholder, type, value, onChange, ...props }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${BASE_INPUT_CLASSES}`}
    />
  );
};