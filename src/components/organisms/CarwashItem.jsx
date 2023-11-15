import { Link } from "react-router-dom";
import MultipleTimeTable from "../molecules/MultipleTimeTable";
import { isEmpty } from "../../utils/isEmpty";
import dayjs from "dayjs";

const CarwashItem = ({
  carwashId,
  name,
  optime,
  bayReservationList,
  imageList,
}) => {
  const today = dayjs().format("YYYY-MM-DD");
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
        <div className="flex justify-between p-4 text-white bg-primary">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="text-2xl">{today}</div>
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
