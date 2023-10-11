// KeyPoint.jsx
import React from 'react';
import Badge from '../atoms/Badge';

const KeyPoint = ({ pointLabels, selectedPoints}) => {
  return (
    <div>
      <h3>키포인트</h3>
      <div className="grid grid-cols-3 gap-2 mt-2">
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

export default KeyPoint;
