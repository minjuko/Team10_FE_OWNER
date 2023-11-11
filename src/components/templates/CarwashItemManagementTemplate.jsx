import { useNavigate, useParams } from "react-router-dom";
import Card from "../molecules/Card";
import CarwashBayItem from "../organisms/CarwashBayItem";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBays, getCarwashItem } from "../../apis/carwashes";
import { isEmpty } from "../../utils/isEmpty";
import AsideLayout from "../atoms/AsideLayout";
import MainContentLayout from "../atoms/MainContentLayout";
import Button from "../atoms/Button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCarwashItemThunk } from "../../store/slices/carwashSlice";

const CarwashItemManagementTemplate = () => {
  const { carwash_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    id,
    name,
    monthlySales,
    monthlyReservations,
    optime,
    bayReservationList,
  } = useSelector((state) => state.carwash);

  useEffect(() => {
    dispatch(getCarwashItemThunk(carwash_id));
  }, [dispatch]);

  const mutation = useMutation({
    mutationFn: (data) => addBays(data),
    onSuccess: () => {
      dispatch(getCarwashItemThunk(carwash_id));
    },
  });

  return (
    <div className="flex gap-16">
      <AsideLayout>
        <Card title={name}>
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 매출</div>
                <div>{monthlySales.toLocaleString()}원</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 예약</div>
                <div>{monthlyReservations.toLocaleString()}건</div>
              </div>
            </div>
          </div>
        </Card>
        <Button
          type="button"
          className="h-16 p-4 text-xl font-semibold text-white bg-gray-700 shadow-xl rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            navigate(`/manage/item/${carwash_id}/edit`);
          }}>
          세차장 정보 수정
        </Button>
        <Button
          type="button"
          className="h-16 p-4 text-xl font-semibold text-white bg-gray-700 shadow-xl rounded-xl"
          onClick={(e) => {
            e.preventDefault();

            const bayNo = window.prompt("추가할 베이 번호를 입력하세요.");

            if (bayNo) {
              if (!isNaN(bayNo)) {
                mutation.mutate({ carwash_id, bay_number: bayNo });
              } else {
                alert("베이 번호는 숫자로 입력해주세요.");
              }
            }
          }}>
          베이 추가
        </Button>
      </AsideLayout>
      <MainContentLayout>
        {isEmpty(bayReservationList) ? (
          <div className="flex flex-col items-center justify-center w-auto gap-8">
            <div className="text-xl">
              등록된 베이가 없습니다. 먼저 베이를 추가해주세요.
            </div>
          </div>
        ) : (
          bayReservationList.map((item) => {
            return (
              <CarwashBayItem
                key={item.bayId}
                carwashId={id}
                optime={optime}
                bay={item}
              />
            );
          })
        )}
      </MainContentLayout>
    </div>
  );
};

export default CarwashItemManagementTemplate;
