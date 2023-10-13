import Checkbox from "../atoms/CheckBox";
import Card from "../molecules/Card";
import MonthSelectorCard from "../organisms/MonthSelectorCard";
import SalesItem from "../organisms/SalesItem";

/**
 * SalesManagementTemplate 템플릿
 * aside 영역과 section 영역으로 구성되어 있습니다.
 * aside 영역에는 월 선택 카드와 매장 선택 체크박스가 있고, section 영역에는 개별 매출내역 아이템들이 보여집니다.
 *
 * @todo
 *
 */
const SalesManagementTemplate = () => {
  const test = [
    {
      reservationId: "1114",
      carwashName: "용봉세차타운",
      bayNo: 1,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1115",
      carwashName: "용봉세차타운",
      bayNo: 2,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1116",
      carwashName: "용봉세차타운",
      bayNo: 3,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1117",
      carwashName: "용봉세차타운",
      bayNo: 4,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1118",
      carwashName: "용봉세차타운",
      bayNo: 5,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1119",
      carwashName: "용봉세차타운",
      bayNo: 6,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1120",
      carwashName: "용봉세차타운",
      bayNo: 7,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1121",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1122",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1123",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1124",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1125",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
    {
      reservationId: "1126",
      carwashName: "용봉세차타운",
      bayNo: 8,
      nickname: "김춘식",
      totalPrice: 25000,
      startTime: "2021-08-01 10:00",
      endTime: "2021-08-01 11:00",
    },
  ];

  return (
    <div className="flex gap-16">
      <aside className="flex-shrink-0 flex-grow-0 flex flex-col gap-4">
        <MonthSelectorCard />
        <Card title="매장별 선택">
          <Checkbox>용봉세차타운</Checkbox>
          <Checkbox>수완세차타운</Checkbox>
        </Card>
      </aside>
      <section className="flex-grow grid gap-4">
        {test.map((item) => {
          return (
            <SalesItem
              key={item.reservationId}
              reservationId={item.reservationId}
              carwashName={item.carwashName}
              bayNo={item.bayNo}
              nickname={item.nickname}
              totalPrice={item.totalPrice}
              startTime={item.startTime}
              endTime={item.endTime}
            />
          );
        })}
      </section>
    </div>
  );
};

export default SalesManagementTemplate;
