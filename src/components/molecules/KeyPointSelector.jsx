import React, { useState } from "react";
import Badge from "../atoms/Badge";

/**
 * KeyPointSelector 키포인트 선택기
 *
 * RegisterForm에서 키포인트를 선택할 수 있는 컴포넌트입니다.
 * DB에 키포인트 인덱스가 1부터 시작하므로, 임의로 index에 1을 더해줍니다.
 *
 * @param {boolean} value
 * @param {string[]} pointLabels
 * @param {function} handleChange
 */

const KeyPointSelector = ({ value, pointLabels, handleChange }) => {
  const [selected, setSelected] = useState(value || []);
  const startingIndexInDB = 8;

  const onChange = (e) => {
    const valueCopy = [...selected];
    if (e.target.checked) valueCopy.push(index + startingIndexInDB);
    else valueCopy.splice(valueCopy.indexOf(index + startingIndexInDB), 1);
    valueCopy.sort((a, b) => a - b);
    setSelected(valueCopy);
  };

  return (
    <div className="p-4 bg-gray-100 border border-gray-300 outline-none w-96 rounded-xl">
      <div className="flex flex-wrap justify-center gap-4">
        {pointLabels.map((label, index) => (
          <Badge
            key={index + 8}
            value={selected.includes(index + startingIndexInDB)}
            onChange={(e) => {
              onChange(e);
              handleChange("keypoint", valueCopy);
            }}>
            {label}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default KeyPointSelector;
