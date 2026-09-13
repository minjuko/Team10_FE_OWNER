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
  const today = dayjs(Date.now()).format("YYYY-MM-DD");
  return (
    <Link
      to={`/manage/item/${carwashId}`}
      aria-label={`${name} 상세 관리 열기`}
      className="group flex overflow-hidden rounded-xl shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative w-48 bg-sky-100">
        {imageList?.[0]?.url ? (
          <img
            className="absolute object-cover w-full h-full"
            src={imageList[0].url}
            alt={name}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-sm text-primary">
            매장 이미지 없음
          </div>
        )}
      </div>
      <div className="flex-grow">
        <div className="flex justify-between p-4 text-white bg-primary">
          <h2 className="text-2xl font-bold">{name}</h2>
          <div className="flex items-center gap-5">
            <div className="text-2xl">{today}</div>
            <span className="px-3 py-1 text-sm font-semibold text-white border border-white rounded-full transition group-hover:translate-x-1">
              상세 관리 →
            </span>
          </div>
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
