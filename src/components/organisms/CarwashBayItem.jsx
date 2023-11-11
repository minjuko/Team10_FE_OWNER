import { useMutation, useQueryClient } from "@tanstack/react-query";
import TimeTable from "../atoms/TimeTable";
import Toggle from "../atoms/Toggle";
import { setBayStatus } from "../../apis/extras";
import { Link } from "react-router-dom";
import WarningMessage from "../atoms/WarningMessage";
import { useDispatch } from "react-redux";
import { getCarwashItemThunk } from "../../store/slices/carwashSlice";

const CarwashBayItem = ({ carwashId, optime, bay }) => {
  const dispatch = useDispatch();

  const errorHandler = (error) => {
    const errorCode = error.response.data.error.code;

    switch (errorCode) {
      case "1201":
        alert("인증에 오류가 발생했습니다. 다시 로그인해주세요.");
        navigate("/login");
        break;
      case "1001":
      case "1002":
        alert("잘못된 값이 입력되었습니다. 다시 시도해주세요.");
        break;
      case "1301":
        alert("베이를 찾을 수 없습니다. 다시 시도해주세요.");
        break;
      case "1102":
        alert("접근 권한이 없습니다. 홈화면으로 이동합니다.");
        navigate("/");
        break;
      default:
        alert("알 수 없는 오류가 발생했습니다. 홈화면으로 이동합니다.");
        navigate("/");
        break;
    }
  };

  const mutation = useMutation({
    queryKey: ["setBayStatus"],
    mutationFn: (data) => setBayStatus(data),
    onSuccess: () => {
      dispatch(getCarwashItemThunk(carwashId));
    },
    onError: errorHandler,
  });

  return (
    <Link
      to={`/manage/item/${carwashId}/${bay.bayId}`}
      className={`grid h-40 gap-4 p-4 shadow-xl rounded-xl ${
        !bay.status && "bg-gray-400"
      }`}>
      <div className="items-center flex-between">
        <div className="flex-items-center-4">
          <div className="text-xl font-semibold">베이 {bay.bayNo}</div>
          {bay.status === 0 && (
            <WarningMessage>
              베이가 활성화 될 때까지 예약을 받을 수 없습니다.
            </WarningMessage>
          )}
        </div>
        <Toggle bay_id={bay.bayId} status={bay.status} mutation={mutation} />
      </div>

      <TimeTable optime={optime} bookedTime={bay.bayBookedTimeList} />
    </Link>
  );
};

export default CarwashBayItem;
