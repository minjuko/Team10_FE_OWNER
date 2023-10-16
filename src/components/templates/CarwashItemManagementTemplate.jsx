import Card from "../molecules/Card";
import CarwashBayItem from "../organisms/CarwashBayItem";
import CarwashImage from "/carwashImage.png";

const CarwashItemManagementTemplate = ({
  carwash = {
    image: CarwashImage,
    name: "용봉세차타운",
    star: 4.3,
    monthly_sales_by_store: 450000,
    monthly_reservation_by_store: 45,
    bay_list: [
      {
        bay_no: 8,
        bay_bookedTime: [
          {
            start_time: "2021-09-01 19:00:00",
            end_time: "2021-09-01 20:00:00",
          },
          {
            start_time: "2021-09-01 20:00:00",
            end_time: "2021-09-01 21:00:00",
          },
        ],
      },
      {
        bay_no: 9,
        bay_bookedTime: [
          {
            start_time: "2021-09-01 19:00:00",
            end_time: "2021-09-01 20:00:00",
          },
          {
            start_time: "2021-09-01 20:00:00",
            end_time: "2021-09-01 21:00:00",
          },
        ],
      },
    ],
  },
}) => {
  return (
    <div className="flex gap-16">
      <aside className="flex flex-col flex-grow-0 flex-shrink-0 gap-4">
        <Card title="용봉세차타운">
          <div className="flex justify-between">
            <div className="font-semibold">이번 달 매출</div>
            <div>{carwash.monthly_sales_by_store.toLocaleString()}원</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">이번 달 예약</div>
            <div>{carwash.monthly_reservation_by_store.toLocaleString()}건</div>
          </div>
        </Card>
        <button
          type="button"
          className="h-16 p-4 text-xl font-semibold text-white bg-gray-700 shadow-xl rounded-xl"
          onClick={(e) => {
            e.preventDefault();
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
        {carwash.bay_list.map((bay) => {
          return <CarwashBayItem key={bay.bay_no} bay={bay} />;
        })}
      </section>
    </div>
  );
};

export default CarwashItemManagementTemplate;
