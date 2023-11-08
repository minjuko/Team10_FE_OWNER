import { Link } from "react-router-dom";
import MultipleTimeTable from "../molecules/MultipleTimeTable";
import { isEmpty } from "../../utils/isEmpty";

const CarwashItem = ({ carwash }) => {
  return (
    <Link
      to={`/manage/item/${carwash.id}`}
      className="flex overflow-auto shadow-xl rounded-xl">
      <div className="relative w-48">
        <img
          className="absolute object-cover w-full h-full"
          src={carwash.image}
          alt={carwash.name}
        />
      </div>
      <div className="flex-grow">
        <div className="p-4 text-2xl font-bold text-white bg-primary filter">
          {carwash.name}
        </div>
        <div className="p-4">
          {isEmpty(carwash.bays) ? (
            <div>예약 가능한 베이가 없습니다.</div>
          ) : (
            <MultipleTimeTable carwash={carwash} />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CarwashItem;
