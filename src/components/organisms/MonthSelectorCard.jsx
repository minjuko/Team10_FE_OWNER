import { useState } from "react";
import Button from "../atoms/Button";
import Card from "../molecules/Card";
import dayjs from "dayjs";

/**
 * MonthSelectorCard 컴포넌트
 * 월 선택 카드입니다.
 *
 * @todo 월 선택시 카드 하단에 해당 월 매출 금액 조회 구현
 */
const MonthSelectorCard = ({ setDate, monthlyRevenue }) => {
  const [yearMonth, setYearMonth] = useState(dayjs().format("YYYY-MM"));

  const handleClickDecrease = () => {
    let newDate = dayjs(yearMonth).subtract(1, "month");
    setYearMonth(newDate.format("YYYY-MM"));
    setDate(newDate.format("YYYY-MM-DD"));
  };

  const handleClickIncrease = () => {
    let newDate = dayjs(yearMonth).add(1, "month");
    // 이번 달 이후로는 조회 불가능
    if (newDate.isAfter(dayjs().startOf("month"), "month")) {
      return;
    }
    setYearMonth(newDate.format("YYYY-MM"));
    setDate(newDate.format("YYYY-MM-DD"));
  };

  const [year, month] = yearMonth.split("-");

  return (
    <Card
      // 월 선택
      title={
        <div className="flex items-center justify-between">
          <Button
            id="-"
            className="w-6 h-12 select-none"
            onClick={handleClickDecrease}>
            ◀
          </Button>
          <div>
            <div>{year}년</div>
            <div className="text-4xl">{month}월</div>
          </div>
          <Button
            id="+"
            className="w-6 h-12 select-none"
            onClick={handleClickIncrease}>
            ▶
          </Button>
        </div>
      }>
      {/* 해당 월 매출 금액 */}
      <div className="text-2xl font-semibold text-center text-primary">
        {monthlyRevenue.toLocaleString()}원
      </div>
    </Card>
  );
};

export default MonthSelectorCard;
