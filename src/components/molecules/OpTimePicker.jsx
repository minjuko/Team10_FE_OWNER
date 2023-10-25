import { useState } from "react";
import Checkbox from "../atoms/CheckBox";
import TimePicker from "../atoms/TimePicker";
import RegisterFormItemStructure from "../atoms/RegisterFormItemStructure";

const OpTimePicker = ({
  weekdayOpenTime,
  weekdayCloseTime,
  weekendOpenTime,
  weekendCloseTime,
  onChange,
}) => {
  const [isWeekday24hours, setIsWeekday24hours] = useState(false);
  const [isWeekend24hours, setIsWeekend24hours] = useState(false);

  return (
    <div className="grid gap-2">
      <RegisterFormItemStructure
        label="평일 영업시간"
        besideLabel={
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setIsWeekday24hours(true);
                onChange("weekdayOpenTime", "00:00");
                onChange("weekdayCloseTime", "23:59");
              } else {
                setIsWeekday24hours(false);
              }
            }}>
            24시간 운영
          </Checkbox>
        }>
        <div className="flex items-center justify-between">
          <TimePicker
            name="weekdayOpenTime"
            value={weekdayOpenTime}
            onChange={onChange}
            disabled={isWeekday24hours}
          />
          {"~"}
          <TimePicker
            name="weekdayCloseTime"
            value={weekdayCloseTime}
            onChange={onChange}
            disabled={isWeekday24hours}
          />
        </div>
      </RegisterFormItemStructure>

      <RegisterFormItemStructure
        label="주말 영업시간"
        besideLabel={
          <Checkbox
            onChange={(e) => {
              if (e.target.checked) {
                setIsWeekend24hours(true);
                onChange("weekendOpenTime", "00:00");
                onChange("weekendCloseTime", "23:59");
              } else {
                setIsWeekend24hours(false);
              }
            }}>
            24시간 운영
          </Checkbox>
        }>
        <div className="flex items-center justify-between">
          <TimePicker
            name="weekendOpenTime"
            value={weekendOpenTime}
            onChange={onChange}
            disabled={isWeekend24hours}
          />
          {"~"}
          <TimePicker
            name="weekendCloseTime"
            value={weekendCloseTime}
            onChange={onChange}
            disabled={isWeekend24hours}
          />
        </div>
      </RegisterFormItemStructure>
    </div>
  );
};

export default OpTimePicker;
