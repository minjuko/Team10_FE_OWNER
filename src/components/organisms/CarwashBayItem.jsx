import { useMutation } from "@tanstack/react-query";
import TimeTable from "../atoms/TimeTable";
import Toggle from "../atoms/Toggle";
import { deleteBay, setBayStatus } from "../../apis/extras";
import { Link, useNavigate } from "react-router-dom";
import WarningMessage from "../atoms/WarningMessage";
import { useDispatch } from "react-redux";
import { getCarwashItemThunk } from "../../store/slices/carwashSlice";

const CarwashBayItem = ({ carwashId, selectedDate, optime, bay }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errorHandler = (error) => {
    const errorCode = error?.response?.data?.error?.code;

    switch (errorCode) {
      case "1201":
        alert("인증에 오류가 발생했습니다. 다시 로그인해주세요.");
        navigate("/login");
        break;
      case "1001":
        alert(
          error?.response?.data?.error?.message ??
            "예약이 있는 베이는 삭제할 수 없습니다."
        );
        break;
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
      dispatch(getCarwashItemThunk({ carwashId, selectedDate }));
    },
    onError: errorHandler,
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteBay(bay.bayId),
    onSuccess: () => {
      dispatch(getCarwashItemThunk({ carwashId, selectedDate }));
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
        <div className="flex-items-center-2">
          <Toggle bay_id={bay.bayId} status={bay.status} mutation={mutation} />
          <button
            type="button"
            aria-label={`베이 ${bay.bayNo} 삭제`}
            className="px-2 py-1 text-xs text-red-600 bg-white border border-red-200 rounded-lg hover:bg-red-50"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              if (window.confirm(`베이 ${bay.bayNo}를 삭제하시겠습니까?`)) {
                deleteMutation.mutate();
              }
            }}
            disabled={deleteMutation.isPending}
          >
            삭제
          </button>
        </div>
      </div>

      <TimeTable optime={optime} bookedTime={bay.bayBookedTimeList} />
    </Link>
  );
};

export default CarwashBayItem;
