import React from "react";
import Badge from "../atoms/Badge";

const KeyPointSelector = ({ pointLabels, selectedPoints }) => {
  return (
    <div className="w-96 p-4 rounded-xl border border-gray-300 bg-gray-100 outline-none">
      <div className="flex flex-wrap justify-center gap-4">
        {pointLabels.map((label, index) => (
          <Badge
            key={index}
            label={label}
            onClick={() => handlePointClick(label)}
            isChecked={selectedPoints.includes(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default KeyPointSelector;
