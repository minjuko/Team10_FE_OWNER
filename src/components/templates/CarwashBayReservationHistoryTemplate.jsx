import { useSuspenseQuery } from "@tanstack/react-query";
import Card from "../molecules/Card";
import { getCarwashBayReservationHistory } from "../../apis/carwashes";
import { useParams } from "react-router-dom";
import ReservationItem from "../organisms/ReservationItem";
import AsideLayout from "../atoms/AsideLayout";
import MainContentLayout from "../atoms/MainContentLayout";
import { isEmpty } from "../../utils/isEmpty";
import MonthSelectorCard from "../organisms/MonthSelectorCard";
import { useState } from "react";
import dayjs from "dayjs";

const CarwashBayReservationHistoryTemplate = () => {
  const { bayId } = useParams();

  const [selectedDate, setSelectedDate] = useState(
    dayjs().startOf("month").format("YYYY-MM-DD")
  );

  const setDate = (newDate) => {
    setSelectedDate(newDate);
  };

  const { data } = useSuspenseQuery({
    queryKey: ["reservationHistory", selectedDate],
    queryFn: () => getCarwashBayReservationHistory(bayId, selectedDate),
  });

  const reservationList = data.data.response.reservationList;
  const bayNo = data.data.response.bayNo;

  return (
    <div className="flex-16">
      <AsideLayout>
        <MonthSelectorCard onChange={setDate} />
        <Card title={"베이 " + bayNo}></Card>
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
