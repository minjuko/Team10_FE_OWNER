import { useNavigate, useParams } from "react-router-dom";
import Card from "../molecules/Card";
import CarwashBayItem from "../organisms/CarwashBayItem";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getCarwashItem } from "../../apis/carwashes";

const CarwashItemManagementTemplate = () => {
  const { carwash_id } = useParams();
  const navigate = useNavigate();

  const { data } = useSuspenseQuery({
    queryKey: ["carwashItem"],
    queryFn: () => getCarwashItem(carwash_id),
  });

  const carwashItemData = data.data.response;

  return (
    <div className="flex gap-16">
      <aside className="flex flex-col flex-grow-0 flex-shrink-0 gap-4">
        <Card title="용봉세차타운">
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 매출</div>
                <div>
                  {carwashItemData.monthly_sales_by_store.toLocaleString()}원
                </div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 예약</div>
                <div>
                  {carwashItemData.monthly_reservation_by_store.toLocaleString()}
                  건
                </div>
              </div>
            </div>
          </div>
        </Card>
        <button
          type="button"
          className="h-16 p-4 text-xl font-semibold text-white bg-gray-700 shadow-xl rounded-xl"
          onClick={(e) => {
            e.preventDefault();
            navigate("/manage/item/edit");
          }}>
          세차장 정보 수정
        </button>
        <button
          type="button"
          className="h-16 p-4 text-xl font-semibold text-white bg-gray-700 shadow-xl rounded-xl"
          onClick={(e) => {
            e.preventDefault();
          }}>
          베이 추가
        </button>
      </aside>
      <section className="grid flex-grow gap-4">
        {carwashItemData.bay_list.map((bay) => {
          return (
            <CarwashBayItem
              key={bay.bay_no}
              optime={carwashItemData.optime}
              bay={bay}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CarwashItemManagementTemplate;
