import { useState } from "react";
import Checkbox from "../atoms/CheckBox";
import TimePicker from "../atoms/TimePicker";

const OpTimePicker = ({
  label,
  openTime,
  closeTime,
  onChangeOpenTime,
  onChangeCloseTime,
}) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <div className="flex justify-between">
        <label className="text-gray-700">{label}</label>
        <Checkbox
          onChange={(e) => {
            if (e.target.checked) {
              setDisabled(true);
              onChangeOpenTime("00:00");
              onChangeCloseTime("23:59");
            } else {
              setDisabled(false);
              onChangeOpenTime("");
              onChangeCloseTime("");
            }
          }}>
          24시간 영업
        </Checkbox>
      </div>
      <div className="flex items-center justify-between">
        <TimePicker
          value={openTime}
          onChange={onChangeOpenTime}
          disabled={disabled}
        />
        ~
        <TimePicker
          value={closeTime}
          onChange={onChangeCloseTime}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default OpTimePicker;
