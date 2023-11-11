import { Link } from "react-router-dom";
import MultipleTimeTable from "../molecules/MultipleTimeTable";
import { isEmpty } from "../../utils/isEmpty";

const CarwashItem = ({
  carwashId,
  name,
  optime,
  bayReservationList,
  imageList,
}) => {
  return (
    <Link
      to={`/manage/item/${carwashId}`}
      className="flex overflow-auto shadow-xl rounded-xl">
      <div className="relative w-48">
        <img
          className="absolute object-cover w-full h-full"
          src={imageList[0]?.url}
          alt={name}
        />
      </div>
      <div className="flex-grow">
        <div className="p-4 text-2xl font-bold text-white bg-primary">
          {name}
        </div>
        <div className="p-4">
          {isEmpty(bayReservationList) ? (
            <div>예약 가능한 베이가 없습니다.</div>
          ) : (
            <MultipleTimeTable
              optime={optime}
              bayReservationList={bayReservationList}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default CarwashItem;
