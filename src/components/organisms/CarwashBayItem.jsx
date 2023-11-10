import { useMutation, useQueryClient } from "@tanstack/react-query";
import TimeTable from "../atoms/TimeTable";
import Toggle from "../atoms/Toggle";
import { setBayStatus } from "../../apis/extras";
import { Link } from "react-router-dom";

const CarwashBayItem = ({ carwashId, optime, bay }) => {
  const queryClient = useQueryClient();

  console.log("carwashId", carwashId);
  console.log("bay", bay);
  console.log("optime", optime);

  const mutation = useMutation({
    queryKey: ["setBayStatus"],
    mutationFn: (data) => setBayStatus(data),
    onSuccess: () => {
      queryClient.refetchQueries(["carwashItem"]);
    },
  });

  return (
    <Link
      to={`/manage/item/${carwashId}/${bay.bayId}`}
      className={`grid h-40 gap-4 p-4 shadow-xl rounded-xl ${
        !bay.status && "bg-gray-400"
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

      <TimeTable optime={optime} bookedTime={bay.bayBookedTimeList} />
    </Link>
  );
};

export default CarwashBayItem;
