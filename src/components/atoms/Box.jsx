import React from 'react';

const getSizeClasses = (size) => {
  switch (size) {
    case 'small': {
      return 'w-577 h-625';
    }
    case 'medium': {
      return 'w-963 h-945';
    }
    default: {
      return 'w-96 w-10';
    }
  }
};

const BASE_BOX_CLASSES = 'border border-gray-300 bg-white';

export const Box = ({ children, size }) => { 
  const sizeClass = getSizeClasses(size);

  return <div className={`${BASE_BOX_CLASSES} ${sizeClass}`}>{children}</div>;
};
