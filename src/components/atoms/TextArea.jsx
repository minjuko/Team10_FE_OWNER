import React, { useMemo } from 'react';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'w-577 h-625';
    }
    case 'medium': {
      return 'w-963 h-945';
    }
    default: {
      return 'w-393 h-187';
    }
  }
};

const BASE_INPUT_CLASSES =
  'border border-gray-300 resize-none bg-gray-100 focus:outline-none focus:border-blue-500';

export const TextArea = ({ placeholder, size, value, onChange, ...props }) => {
  const sizeClass = getSizeClasses(size);
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${BASE_INPUT_CLASSES} ${sizeClass}`}
    />
  );
};