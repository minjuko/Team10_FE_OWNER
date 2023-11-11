import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Star from "/MobilePreview/star.svg";
import Time from "/MobilePreview/time.svg";
import Location from "/MobilePreview/location.svg";
import AC from "/MobilePreview/ac.svg";
import Garage from "/MobilePreview/garage.svg";
import Light from "/MobilePreview/light.svg";
import Tel from "/MobilePreview/tel.svg";
import Underside from "/MobilePreview/underside.svg";
import Tapwater from "/MobilePreview/tapwater.svg";
import Breakroom from "/MobilePreview/breakroom.svg";
import Waterproof from "/MobilePreview/waterproof.svg";
import IconWithLabel from "../molecules/IconWIthLabel";
import NoImage from "/noimage.png";
import { isEmpty } from "../../utils/isEmpty";
import { telFormatter } from "../../utils/telFormatter";

const MobilePreview = ({ inputs }) => {
  const KEYPOINT = {
    8: {
      iconSrc: Underside,
      alt: "하부세차 아이콘",
      label: "하부세차",
    },
    9: {
      iconSrc: Garage,
      alt: "차고 아이콘",
      label: "개러지형 독립공간",
    },
    10: {
      iconSrc: Light,
      alt: "전구 아이콘",
      label: "야간조명",
    },
    11: {
      iconSrc: Tapwater,
      alt: "물방울 아이콘",
      label: "100% 수돗물",
    },
    12: {
      iconSrc: Breakroom,
      alt: "커피잔 아이콘",
      label: "휴게실",
    },
    13: {
      iconSrc: AC,
      alt: "에어컨 아이콘",
      label: "에어컨",
    },
    14: {
      iconSrc: Waterproof,
      alt: "방수 아이콘",
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

      <div className="grid gap-4 p-4">
        {/* 세차장 이름, 별점, 예약베이 */}
        <div className="flex justify-between">
          <div>
            <div className="text-xl font-bold">{inputs.carwashName}</div>
            <div className="flex items-center gap-1">
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
        <div className="grid gap-1 p-4 text-sm bg-gray-100 rounded-xl">
          <IconWithLabel
            src={Time}
            alt="시계 아이콘"
            label={
              <div className="flex gap-1">
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
            size="sm"
          />

          <div className="flex gap-1 ml-5">
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
          <IconWithLabel
            src={Tel}
            alt="전화 아이콘"
            label={telFormatter(inputs.carwashTel)}
            size="sm"
          />
          <IconWithLabel
            src={Location}
            alt="위치"
            label={inputs.carwashAddress}
            size="sm"
          />
        </div>

        {/* 키포인트 */}
        <div className="grid gap-2 p-4 bg-gray-100 rounded-xl">
          <div className="font-bold">키포인트</div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {Object.keys(KEYPOINT).map((key) => {
              if (inputs.keypoint.includes(Number(key))) {
                return (
                  <IconWithLabel
                    key={key}
                    src={KEYPOINT[key].iconSrc}
                    alt={KEYPOINT[key].alt}
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
