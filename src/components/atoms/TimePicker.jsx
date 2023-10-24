import { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const TimePicker = ({ value, onChange, disabled = false }) => {
  const [time, setTime] = useState(value || "");
  const [showTimePicker, setShowTimePicker] = useState(false);

  const timePickerRef = useClickOutside(() => {
    setShowTimePicker(false);
  });

  const generateTime = () => {
    let timeElements = [];

    for (let hour = 0; hour < 24; hour++) {
      ["00", "30"].forEach((minutes) => {
        const timeStr = hour + ":" + minutes;
        timeElements.push(
          <div
            key={timeStr}
            className="text-center select-none hover:bg-gray-100"
            onClick={() => {
              setTime(timeStr);
              onChange(timeStr);
              setShowTimePicker(false);
            }}>
            {timeStr}
          </div>
        );
      });
    }

    return timeElements;
  };

  return (
    <div className="relative" ref={timePickerRef}>
      <div
        className={`w-44 p-4 text-center text-black bg-gray-100 border border-gray-300 outline-none cursor-pointer rounded-xl ${
          disabled && "opacity-30"
        }`}
        onClick={() => {
          if (disabled) return;
          setShowTimePicker(!showTimePicker);
        }}>
        {time || "시간 선택"}
      </div>
      {showTimePicker && (
        <div className="absolute z-50 w-40 overflow-auto text-black bg-white border border-gray-300 h-36 rounded-xl">
          {generateTime()}
        </div>
      )}
      <input value={time} hidden readOnly name="time" disabled={disabled} />
    </div>
  );
};

export default TimePicker;
