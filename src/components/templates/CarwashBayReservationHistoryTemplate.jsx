import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "../molecules/Card";
import { getCarwashBayReservationHistory } from "../../apis/carwashes";
import { useParams } from "react-router-dom";
import ReservationItem from "../organisms/ReservationItem";
import AsideLayout from "../atoms/AsideLayout";
import MainContentLayout from "../atoms/MainContentLayout";

const CarwashBayReservationHistoryTemplate = () => {
  const bay_id = useParams().bay_id;

  const { data } = useSuspenseQuery({
    queryKey: ["reservationHistory"],
    queryFn: () => getCarwashBayReservationHistory(bay_id),
  });

  const reservationList = data.data.response.reservationList;
  const carwashName = data.data.response.reservationList[0].carwash.name;
  const bayNo = data.data.response.reservationList[0].reservation.bayNo;

  return (
    <div className="flex gap-16">
      <AsideLayout>
        <Card title={carwashName + ": 베이 " + bayNo}>
          <div className="grid gap-2">
            <div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 매출</div>
                <div>{}원</div>
              </div>
              <div className="flex justify-between">
                <div className="font-semibold">이번 달 예약</div>
                <div>{}건</div>
              </div>
            </div>
          </div>
        </Card>
      </AsideLayout>
      <MainContentLayout>
        {reservationList.map((item) => {
          return (
            <ReservationItem
              key={item.reservation.reservationId}
              reservationId={item.reservation.reservationId}
              carwashName={item.carwash.name}
              bayNo={item.reservation.bayNo}
              nickname={item.reservation.nickname}
              totalPrice={item.reservation.totalPrice}
              startTime={item.reservation.startTime}
              endTime={item.reservation.endTime}
            />
          );
        })}
      </MainContentLayout>
    </div>
  );
};

export default CarwashBayReservationHistoryTemplate;
