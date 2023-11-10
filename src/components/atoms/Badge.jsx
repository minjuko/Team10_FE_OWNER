import React, { useState } from "react";

const getStyle = (checked) => {
  const commonStyle =
    "align-middle px-3.5 py-1 border rounded-full text-center";

  switch (checked) {
    case "checked":
      return `${commonStyle} bg-primary text-white border-primary`;
    case "unchecked":
      return `${commonStyle} bg-white text-black border-gray-300`;
    default:
      return "";
  }
};

const Badge = ({ value, onChange, children, props }) => {
  const [isChecked, setIsChecked] = useState(value);

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <label className={getStyle(isChecked ? "checked" : "unchecked")}>
      <input
        hidden
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          handleChange(e);
          onChange(e);
        }}
        {...props}
      />
      {children}
    </label>
  );
};

export default Badge;
