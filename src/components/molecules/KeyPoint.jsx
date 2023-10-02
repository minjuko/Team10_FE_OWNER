// KeyPoint.jsx
import React from 'react';
import Badge from '../atoms/Badge';
import { Box } from '../atoms/Box';

const KeyPoint = ({ pointLabels, selectedPoints}) => {
  return (
    <Box size="keypointbox">
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
    </Box>
  );
};

export default KeyPoint;
