import React from 'react';
import Badge from '../atoms/Badge';
import { Box } from '../atoms/Box';

const KeyPointSelector = ({ pointLabels, selectedPoints }) => {
  return (
    <Box size="keypointbox">
      <div className="flex flex-col gap-2">
        <div className="flex flex-item gap-4">
        {pointLabels.slice(0, 2).map((label, index) => (
          <Badge
            key={index}
            label={label}
            onClick={() => handlePointClick(label)}
            isChecked={selectedPoints.includes(label)}
          />
        ))}
      </div>
      <div className="flex flex-item gap-4 mt-2">
        {pointLabels.slice(2, 5).map((label, index) => (
          <Badge
            key={index}
            label={label}
            onClick={() => handlePointClick(label)}
            isChecked={selectedPoints.includes(label)}
          />
        ))}
      </div>
      <div className="flex flex-item gap-4 mt-2">
        {pointLabels.slice(5).map((label, index) => (
          <Badge
            key={index}
            label={label}
            onClick={() => handlePointClick(label)}
            isChecked={selectedPoints.includes(label)}
          />
        ))}
      </div>

      </div>
    </Box>
  );
};

export default KeyPointSelector;
