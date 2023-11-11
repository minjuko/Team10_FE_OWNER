import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Star from "/MobilePreview/star.svg";
import IconWithLabel from "../molecules/IconWIthLabel";
import NoImage from "/noimage.png";
import { isEmpty } from "../../utils/isEmpty";
import { telFormatter } from "../../utils/telFormatter";

const MobilePreview = ({ inputs }) => {
  const KEYPOINT = {
    8: {
      icon: "tel",
      label: "하부세차",
    },
    9: {
      icon: "garage",
      label: "개러지형 독립공간",
    },
    10: {
      icon: "light",
      label: "야간조명",
    },
    11: {
      icon: "tapwater",
      label: "100% 수돗물",
    },
    12: {
      icon: "breakroom",
      label: "휴게실",
    },
    13: {
      icon: "ac",
      label: "에어컨",
    },
    14: {
      icon: "waterproof",
      label: "발수코팅건",
    },
  };

  return (
    <div className="relative overflow-auto bg-white shadow-xl rounded-xl grow">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}>
        {isEmpty(inputs.carwashImage) ? (
          <img src={NoImage} alt="등록된 사진 없음" />
        ) : (
          inputs.carwashImage.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt="이미지"
              className="h-56"
            />
          ))
        )}
      </Carousel>

      <div className="p-4 grid-4">
        {/* 세차장 이름, 별점, 예약베이 */}
        <div className="flex-between">
          <div>
            <div className="text-xl font-bold">{inputs.carwashName}</div>
            <div className="flex-items-center-1">
              <img src={Star} alt="별점" className="w-4 h-4" />
              <div className="text-sm">5.0</div>
              <div className="text-sm text-gray-500">(999)</div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-center text-primary">4</div>
            <div className="text-sm font-semibold">예약베이</div>
          </div>
        </div>

        {/* 영업시간, 주소 */}
        <div className="p-4 text-sm bg-gray-100 grid-1 rounded-xl">
          <IconWithLabel
            icon="time"
            label={
              <div className="flex-1">
                <div>평일</div>
                {inputs.weekdayOpenTime === "00:00" &&
                inputs.weekdayCloseTime === "23:59" ? (
                  <div>24시간 운영</div>
                ) : (
                  <div>
                    {inputs.weekdayOpenTime}~{inputs.weekdayCloseTime}
                  </div>
                )}
              </div>
            }
          />

          <div className="flex-1 ml-6">
            <div>주말</div>
            {inputs.weekendOpenTime === "00:00" &&
            inputs.weekendCloseTime === "23:59" ? (
              <div>24시간 운영</div>
            ) : (
              <div>
                {inputs.weekendOpenTime}~{inputs.weekendCloseTime}
              </div>
            )}
          </div>
          <IconWithLabel icon="tel" label={telFormatter(inputs.carwashTel)} />
          <IconWithLabel icon="location" label={inputs.carwashAddress} />
        </div>

        {/* 키포인트 */}
        <div className="p-4 bg-gray-100 grid-2 rounded-xl">
          <div className="font-bold">키포인트</div>
          <div className="grid-cols-2 text-xs grid-2">
            {Object.keys(KEYPOINT).map((key) => {
              if (inputs.keypoint.includes(Number(key))) {
                return (
                  <IconWithLabel
                    key={key}
                    icon={KEYPOINT[key].icon}
                    label={KEYPOINT[key].label}
                    size="xl"
                  />
                );
              }
            })}
          </div>
        </div>

        {/* 세차장 설명 */}
        <p className="overflow-auto text-sm whitespace-pre-wrap h-60">
          {inputs.carwashDescription}
        </p>
      </div>
    </div>
  );
};

export default MobilePreview;
