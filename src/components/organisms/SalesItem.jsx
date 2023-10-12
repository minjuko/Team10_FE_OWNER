import Box from "../atoms/Box";
import Photo from "../atoms/Photo";
import ProfileIcon from "/profile.svg";

/**
 * SalesItem 컴포넌트
 * 개별 판매내역을 보여주는 컴포넌트입니다.
 *
 * @param {reservationId} 예약번호
 * @param {carwashName} 세차장 이름
 * @param {bayNo} 베이 번호
 * @param {nickname} 고객 닉네임
 * @param {totalPrice} 총 결제금액
 * @param {startTime} 시작시간
 * @param {endTime} 종료시간
 */

const SalesItem = ({
  reservationId,
  carwashName,
  bayNo,
  nickname,
  totalPrice,
  startTime,
  endTime,
}) => {
  return (
    <Box className="p-4 grid gap-4">
      <div className="text-xl text-gray-400">#{reservationId}</div>
      <div className="flex justify-between">
        <div className="text-xl">
          {carwashName}: 베이 {bayNo}
        </div>
        <div className="flex gap-2 items-center">
          <Photo src={ProfileIcon} alt="profile" />
          <div className="text-xl">{nickname}</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-2xl font-semibold text-primary">
          {totalPrice.toLocaleString()}원
        </div>
        <div className="text-xl">
          {startTime} ~ {endTime}
        </div>
      </div>
    </Box>
  );
};

export default SalesItem;
