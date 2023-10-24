import { useRef, useState } from "react";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import KeyPointSelector from "../molecules/KeyPointSelector";
import DaumPostcode from "react-daum-postcode";
import { useNavigate } from "react-router-dom";
import OpTimePicker from "../molecules/OpTimePicker";

/**
 * RegisterForm
 *
 * 세차장 입점신청 폼입니다.
 *
 * @todo 각 input에 대한 validation 필요
 * @todo 매장사진 가로 스크롤 항상 표시되도록 수정 필요
 * @todo 매장 사진 required 처리 필요
 * @todo Organism에서 Template으로 격상 필요
 * @todo 복잡한 로직은 컴포넌트로 분리 필요(운영시간, 매장사진, 키포인트)
 * @todo isSubmitting 상태에 따라 입점신청 버튼 스타일 변경 필요
 */
const RegisterForm = ({ defaultValue, mutation }) => {
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const [carwashName, setCarwashName] = useState(defaultValue.carwashName);
  const [carwashAddress, setCarwashAddress] = useState(
    defaultValue.carwashAddress
  );
  const [carwashTel, setCarwashTel] = useState(defaultValue.carwashTel);
  const [pricePer30min, setPricePer30min] = useState(
    defaultValue.pricePer30min
  );
  const [weekdayOpenTime, setWeekdayOpenTime] = useState(
    defaultValue.weekdayOpenTime
  );
  const [weekdayCloseTime, setWeekdayCloseTime] = useState(
    defaultValue.weekdayCloseTime
  );
  const [weekendOpenTime, setWeekendOpenTime] = useState(
    defaultValue.weekendOpenTime
  );
  const [weekendCloseTime, setWeekendCloseTime] = useState(
    defaultValue.weekendCloseTime
  );
  const [carwashImage, setCarwashImage] = useState(defaultValue.carwashImage);
  const [keypoint, setKeypoint] = useState(defaultValue.keypoint);
  const [carwashDescription, setCarwashDescription] = useState(
    defaultValue.carwashDescription
  );

  const [openPostcode, setOpenPostcode] = useState(false);

  const pointLabels = [
    "하부세차",
    "개러지형 독립공간",
    "야간조명",
    "100% 수돗물",
    "휴게실",
    "에어컨",
    "발수코팅건",
  ];

  const handleChangeData = (e) => {
    const files = e.target.files;

    Array.from(files).forEach((file) => {
      setCarwashImage((prev) => {
        return [...prev, URL.createObjectURL(file)];
      });
    });
  };

  const handleClickDelete = (e, index) => {
    e.stopPropagation();
    const tmpCarwashImage = [...carwashImage];
    tmpCarwashImage.splice(index, 1);

    setCarwashImage(tmpCarwashImage);
  };

  const handleClickImage = (index) => {
    if (index === 0) return;
    // 상태 업데이트
    const tmpCarwashImage = [...carwashImage];

    tmpCarwashImage.unshift(tmpCarwashImage[index]);
    tmpCarwashImage.splice(index + 1, 1);

    setCarwashImage(tmpCarwashImage);
  };

  return (
    <form
      className="grid gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("carwashName", carwashName);
        console.log("carwashAddress", carwashAddress);
        console.log("carwashTel", carwashTel);
        console.log("pricePer30min", pricePer30min);
        console.log("weekdayOpenTime", weekdayOpenTime);
        console.log("weekdayCloseTime", weekdayCloseTime);
        console.log("weekendOpenTime", weekendOpenTime);
        console.log("weekendCloseTime", weekendCloseTime);
        console.log("carwashImage", carwashImage);
        console.log("keypoint", keypoint);
        console.log("carwashDescription", carwashDescription);
      }}>
      {/* Wrapper */}
      <div className="flex gap-8">
        {/* 왼쪽 영역 */}
        <section className="grid gap-4">
          {/* 매장명 */}
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="carwashName" className="text-gray-700">
                매장명
              </label>
            </div>
            <TextInput
              id="carwashName"
              type="text"
              value={carwashName}
              onChange={(e) => {
                setCarwashName(e.target.value);
              }}
              placeholder="○○세차장"
            />
          </div>
          {/* 주소 */}
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="carwashAddress" className="text-gray-700">
                주소
              </label>
            </div>
            <div className="relative flex gap-4 w-96">
              <TextInput
                id="carwashAddress"
                type="text"
                value={carwashAddress}
                onChange={(e) => {
                  setCarwashAddress(e.target.value);
                }}
                placeholder="주소"
                disabled={true}
              />
              <Button
                onClick={() => {
                  setOpenPostcode((current) => !current);
                }}
                className="shrink-0"
                style="small">
                주소검색
              </Button>
              {openPostcode && (
                <div className="absolute z-50 overflow-auto bg-white border w-96 rounded-xl">
                  <div className="flex items-center justify-between p-4 bg-gray-100 border-b">
                    <div>주소검색</div>
                    <Button
                      className="text-xl"
                      onClick={() => {
                        setOpenPostcode(false);
                      }}>
                      ✕
                    </Button>
                  </div>
                  <DaumPostcode
                    onComplete={(data) => {
                      setCarwashAddress(data.address);
                      setOpenPostcode(false);
                    }}
                    autoClose={false}
                  />
                </div>
              )}
            </div>
          </div>
          {/* 전화번호 */}
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="carwashTel" className="text-gray-700">
                전화번호
              </label>
            </div>
            <TextInput
              id="carwashTel"
              type="tel"
              value={carwashTel}
              onChange={(e) => {
                setCarwashTel(e.target.value);
              }}
              placeholder="전화번호"
            />
          </div>
          {/* 30분 당 금액 */}
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pricePer30min" className="text-gray-700">
                30분 당 금액
              </label>
            </div>
            <TextInput
              id="pricePer30min"
              type="number"
              value={pricePer30min}
              onChange={(e) => {
                setPricePer30min(e.target.value);
              }}
              placeholder="30분 당 금액"
            />
          </div>

          {/* 영업시간 */}
          <div className="grid gap-2">
            <label className="text-gray-700">영업시간</label>
            <OpTimePicker
              label="평일"
              openTime={weekdayOpenTime}
              closeTime={weekdayCloseTime}
              onChangeOpenTime={setWeekdayOpenTime}
              onChangeCloseTime={setWeekdayCloseTime}
            />
            <OpTimePicker
              label="주말"
              openTime={weekendOpenTime}
              closeTime={weekendCloseTime}
              onChangeOpenTime={setWeekendOpenTime}
              onChangeCloseTime={setWeekendCloseTime}
            />
          </div>
        </section>

        {/* 오른쪽 영역 */}
        <section className="grid gap-4">
          {/*매장 사진*/}
          <div className="grid gap-2">
            <label
              htmlFor="carwashImage"
              className="flex justify-between text-gray-700">
              <div>매장사진</div>

              <Button
                onClick={() => {
                  fileInputRef.current.click();
                }}
                style="addPhoto">
                + 추가
              </Button>
            </label>
            <input
              type="file"
              accept="image/*"
              id="carwashImage"
              ref={fileInputRef}
              onChange={handleChangeData}
              hidden
            />
            <div className="flex gap-4 p-4 overflow-x-auto overflow-y-hidden bg-gray-100 border border-gray-300 outline-none w-96 rounded-xl h-28">
              {carwashImage.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-20 h-20 overflow-auto shrink-0 rounded-xl"
                    onClick={() => {
                      handleClickImage(index);
                    }}>
                    <img
                      className="absolute object-cover w-full h-full"
                      src={item}
                      alt={`미리보기 ${index}}`}
                    />
                    {index === 0 && (
                      <div className="absolute bottom-0 w-full p-1 text-xs text-center text-white bg-primary font-semobold">
                        프로필
                      </div>
                    )}
                    <Button
                      style="deletePhoto"
                      onClick={(e) => handleClickDelete(e, index)}
                      className="absolute top-1 right-1">
                      ✕
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
          {/* 키포인트 */}
          <div className="grid gap-2">
            <label className="text-gray-700">키포인트</label>
            <KeyPointSelector
              value={keypoint}
              pointLabels={pointLabels}
              onChange={setKeypoint}
            />
          </div>
          {/* 매장 설명 */}
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <label htmlFor="carwashDescription" className="text-gray-700">
                매장 설명
              </label>
            </div>
            <textarea
              className="block p-4 bg-gray-100 border border-gray-300 outline-none resize-none h-52 w-96 rounded-xl"
              id="carwashDescription"
              value={carwashDescription}
              onChange={(e) => {
                setCarwashDescription(e.target.value);
              }}
              placeholder="매장 설명"></textarea>
          </div>
        </section>
      </div>

      {/* 하단 버튼 */}
      <div className="flex justify-center">
        <Button type="submit" style="long">
          입점신청
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
