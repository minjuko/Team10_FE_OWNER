// TimeSelector.js
import React from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const TimeSelector = ({ label, startTime, setStartTime, endTime, setEndTime }) => {

  return (
    <div>
      <div className="flex items-center pl-2">
        <div className="flex flex-col">
          <DatePicker
            dateFormat="h:mm aa"
            shouldCloseOnSelect 
            selected={startTime}
            onChange={(date) => setStartTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="시작 시간"
            className="w-36 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100"
            placeholderText="시작 시간"
          />
        </div>
        <label className="text-gray-500 text-base ml-3.5 mr-3.5">~</label>
        <div className="flex flex-col">
          <DatePicker
            dateFormat="h:mm aa"
            shouldCloseOnSelect 
            selected={endTime}
            onChange={(date) => setEndTime(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            timeCaption="종료 시간"
            className="w-36 h-14 px-4 rounded-xl border border-gray-300 bg-gray-100"
            placeholderText="종료 시간"
          />
        </div>
      </div>
    </div>
  );
};

export default TimeSelector;