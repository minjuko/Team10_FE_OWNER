import React from "react";

  const Checkbox = ({ checked, onChange, label, id }) => {
  return (
    <div className="flex items-center pl-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        id={id}
        className="mr-1"
      />
      <label htmlFor={id} className="text-gray-500 text-base">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;