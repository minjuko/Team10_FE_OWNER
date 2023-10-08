import React, { useState } from "react";

const Badge = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const getType = (type) => {
    const commonStyle =
      "align-middle px-3.5 py-1 rounded-full border leading-normal text-center";

    switch (type) {
      case "unclicked":
        return `${commonStyle} border-gray-300 bg-white text-black`;
      case "onclicked":
        return `${commonStyle} border-sky-500 bg-sky-500 text-white`;
      default:
        return "";
    }
  };

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="field">
      <label
        className={`${
          isChecked ? getType("onclicked") : getType("unclicked")
        }`}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="hidden"
        />
        <span className="select-none">{label}</span>
      </label>
    </div>
  );
};

export default Badge;
