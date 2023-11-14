import TimePicker from "../atoms/TimePicker";
import RegisterFormItemStructure from "../atoms/RegisterFormItemStructure";

const OpTimePicker = ({
  weekdayOpenTime,
  weekdayCloseTime,
  weekendOpenTime,
  weekendCloseTime,
  onChange,
}) => {
  return (
    <div className="grid gap-2">
      <RegisterFormItemStructure label="평일 영업시간">
        <div className="flex items-center justify-between">
          <TimePicker
            name="weekdayOpenTime"
            value={weekdayOpenTime}
            onChange={onChange}
          />
          {"~"}
          <TimePicker
            name="weekdayCloseTime"
            value={weekdayCloseTime}
            onChange={onChange}
          />
        </div>
      </RegisterFormItemStructure>

      <RegisterFormItemStructure label="주말 영업시간">
        <div className="items-center flex-between">
          <TimePicker
            name="weekendOpenTime"
            value={weekendOpenTime}
            onChange={onChange}
          />
          {"~"}
          <TimePicker
            name="weekendCloseTime"
            value={weekendCloseTime}
            onChange={onChange}
          />
        </div>
      </RegisterFormItemStructure>
    </div>
  );
};

export default OpTimePicker;
