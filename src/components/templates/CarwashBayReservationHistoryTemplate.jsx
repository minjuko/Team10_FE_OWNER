import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import Card from "../molecules/Card";
import {
  getBayRevenue,
  getCarwashBayReservationHistory,
} from "../../apis/carwashes";
import { useParams } from "react-router-dom";
import ReservationItem from "../organisms/ReservationItem";
import AsideLayout from "../atoms/AsideLayout";
import MainContentLayout from "../atoms/MainContentLayout";
import { isEmpty } from "../../utils/isEmpty";

const CarwashBayReservationHistoryTemplate = () => {
  const { bayId } = useParams();

  const [revenueData, reservationData] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["bayRevenue"],
        queryFn: () => getBayRevenue(bayId),
      },
      {
        queryKey: ["reservationHistory"],
        queryFn: () => getCarwashBayReservationHistory(bayId),
      },
    ],
  });

  const revenue = revenueData.data.data.response;
  const reservationList = reservationData.data.data.response.reservationList;
  const bayNo = reservationData.data.data.response.bayNo;

  return (
    <div className="flex-16">
      <AsideLayout>
        <Card title={"베이 " + bayNo}>
          <div className="grid-2">
            <div>
              <div className="flex-between">
                <div className="font-semibold">이번 달 매출</div>
                <div>{revenue.revenue.toLocaleString()}원</div>
              </div>
              <div className="flex-between">
                <div className="font-semibold">이번 달 예약</div>
                <div>{revenue.reservationCnt.toLocaleString()}건</div>
              </div>
            </div>
          </div>
        </Card>
      </AsideLayout>
      <MainContentLayout>
        {isEmpty(reservationList) ? (
          <div className="flex-col justify-center w-auto flex-items-center-8">
            <div className="text-xl">예약 내역이 없습니다.</div>
          </div>
        ) : (
          reservationList.map((item) => {
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
          })
        )}
      </MainContentLayout>
    </div>
  );
};

export default CarwashBayReservationHistoryTemplate;
