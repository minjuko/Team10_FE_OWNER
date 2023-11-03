import { useMutation } from "@tanstack/react-query";
import TimeTable from "../atoms/TimeTable";
import Toggle from "../atoms/Toggle";
import { setBayStatus } from "../../apis/extras";

const CarwashBayItem = ({ optime, bay }) => {
  const mutation = useMutation({
    mutationFn: (data) => setBayStatus(data),
  });

  return (
    <div className="grid h-40 gap-4 p-4 shadow-xl rounded-xl">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">베이 {bay.bay_no}</div>
        <Toggle bay_id={bay.bay_id} status={bay.status} mutation={mutation} />
      </div>

      <TimeTable optime={optime} bookedTime={bay.bay_bookedTime} />
    </div>
  );
};

export default CarwashBayItem;
