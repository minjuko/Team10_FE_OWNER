import DashboardItem from "../components/atoms/DashboardItem";
import GNB from "../components/atoms/GNB";
import SalesIcon from "/DashboardItem/salesIcon.svg";
import ReservationIcon from "/DashboardItem/reservationIcon.svg";
import CarwashShortcutItem from "../components/atoms/CarwashShortcutItem";
import CarwashImage from "/carwashImage.png";

const HomePage = () => {
  const testItem = {
    imageUrl: CarwashImage,
    name: "포세이돈워시 용봉점",
    monthlySales: 250000,
    monthlyReservations: 100,
  };

  return (
    <div>
      <GNB />
      <div className="grid gap-8">
        <section className="grid gap-4">
          <h1 className="text-3xl font-bold">김춘식 사장님 안녕하세요!</h1>
          <div className="flex gap-4">
            <DashboardItem
              label="이번 달 전체 판매"
              icon={SalesIcon}
              number="1,173,000원"
              percentage={10.4}
            />
            <DashboardItem
              label="이번 달 전체 예약"
              icon={ReservationIcon}
              number="47건"
              percentage={-2.1}
            />
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className="text-2xl font-bold">김춘식 사장님의 매장</h2>
          <div className="flex gap-4">
            <CarwashShortcutItem carwash={testItem} />
            <CarwashShortcutItem carwash={testItem} />
            <CarwashShortcutItem carwash={testItem} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
