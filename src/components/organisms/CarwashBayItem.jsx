import { useMutation } from "@tanstack/react-query";
import TimeTable from "../atoms/TimeTable";
import Toggle from "../atoms/Toggle";
import { setBayStatus } from "../../apis/extras";

const CarwashBayItem = ({ optime, bay }) => {
  const mutation = useMutation({
    queryKey: ["setBayStatus"],
    mutationFn: (data) => setBayStatus(data),
  });

  return (
    <div
      className={`grid h-40 gap-4 p-4 shadow-xl rounded-xl ${
        bay.status === 0 && "bg-gray-400"
      }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-semibold">베이 {bay.bayNo}</div>
          {bay.status === 0 && (
            <small className="text-red-500 ">
              베이가 활성화 될 때까지 예약을 받을 수 없습니다.
            </small>
          )}
        </div>
        <Toggle bay_id={bay.bayId} status={bay.status} mutation={mutation} />
      </div>

      <TimeTable optime={optime} bookedTime={bay.bayBookedTime} />
    </div>
  );
};

export default CarwashBayItem;
