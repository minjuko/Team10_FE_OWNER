// TimeSelector.js
import React from 'react';
import DatePicker from 'react-datepicker';

const TimeSelector = ({ label, startTime, setStartTime, endTime, setEndTime }) => {
  return (
    <div>
      <label>{label}:</label>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <label className="text-gray-800 text-base">시작 시간</label>
          <DatePicker
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeInput
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="시작 시간"
            dateFormat="h:mm aa"
            className="w-[156px] h-[56px] border border-gray-800 bg-gray-50 p-2 rounded-12"
            placeholderText="시작 시간을 선택하세요"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-800 text-base">종료 시간</label>
          <DatePicker
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="종료 시간"
            dateFormat="h:mm aa"
            className="w-[156px] h-[56px] border border-gray-800 bg-gray-50 p-2 rounded-12"
            placeholderText="종료 시간을 선택하세요"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;
