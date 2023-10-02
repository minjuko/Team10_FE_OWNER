import React, { useState } from "react";

const getType = (type) => {
  switch (type) {
    case "unclicked":
      return "align-middle px-3.5 py-1  rounded-xl border border-gray-300 text-blackleading-normal text-center";
    case "onclicked":
      return "align-middle px-3.5 py-1  rounded-xl bg-sky-500 text-white leading-normal text-center";
    default:
      return "";
  }
};

const Badge = ({ label, ...props }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="field">
      <label
        className={`${isChecked ? getType("onclicked") : getType("unclicked")}`}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheckbox}
          className="hidden"
        />
        {label}
      </label>
    </div>
  );
};

export default Badge;