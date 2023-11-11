import { Link } from "react-router-dom";

const CarwashShortcutItem = ({
  carwashId,
  name,
  monthlySales,
  monthlyReservations,
  imageFileList,
}) => {
  return (
    <Link
      to={`/manage/item/${carwashId}`}
      className="overflow-auto bg-white shadow-xl flex-items-center-4 w-96 rounded-xl">
      <div className="relative w-36 h-36">
        <img
          src={imageFileList[0]?.url}
          alt={name}
          className="absolute object-cover w-36 h-36"
        />
      </div>
      <div className="grid-2 w-52">
        <div className="overflow-hidden text-2xl font-bold text-ellipsis whitespace-nowrap">
          {name}
        </div>
        <div className="grid-1">
          <div className="flex-between">
            <div className="font-semibold">이번 달 매출</div>
            <div>{monthlySales.toLocaleString()}원</div>
          </div>
          <div className="flex-between">
            <div className="font-semibold">이번 달 예약</div>
            <div>{monthlyReservations.toLocaleString()}건</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarwashShortcutItem;
