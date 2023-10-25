import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Star from "/MobilePreview/star.svg";
import Time from "/MobilePreview/time.svg";
import Location from "/MobilePreview/location.svg";
import AC from "/MobilePreview/ac.svg";
import Garage from "/MobilePreview/garage.svg";
import Light from "/MobilePreview/light.svg";

const MobilePreview = () => {
  const images = [
    "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/b214edfd-a3b7-4eb0-aaef-9dd4705ca24e",
    "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/16b2ae1e-d904-48fc-b1e2-660b38c25c3f",
    "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/fdb8f53b-08eb-4b35-8b89-0394473c2d7b",
  ];
  return (
    <div className="overflow-auto bg-white shadow-xl rounded-xl grow">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="이미지" className="h-56" />
          </div>
        ))}
      </Carousel>

      <div className="grid gap-4 p-4">
        {/* 세차장 이름, 별점, 예약베이 */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-bold">포세이돈워시 용봉점</div>
            <div className="flex items-center gap-1">
              <img src={Star} alt="" className="w-3 h-3" />
              <div className="text-sm">5.0</div>
              <div className="text-sm text-gray-400">(500)</div>
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-center text-primary">4</div>
            <div className="text-sm font-semibold">예약베이</div>
          </div>
        </div>

        {/* 영업시간, 주소 */}
        <div className="grid gap-2 p-4 text-sm bg-gray-100 rounded-xl">
          <div className="flex gap-2">
            <img src={Time} alt="시계 아이콘" />
            <div>
              <div>평일 12:00~18:00</div>
              <div>주말 24시간 영업</div>
            </div>
          </div>
          <div className="flex gap-2">
            <img src={Location} alt="위치 아이콘" />
            <div>광주 북구 용봉동 233</div>
          </div>
        </div>

        {/* 키포인트 */}
        <div className="grid gap-2 p-4 bg-gray-100 rounded-xl">
          <div className="font-bold">키포인트</div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex gap-2">
              <img src={AC} alt="에어컨 아이콘" width={16} />
              <div className="text-xs">에어컨</div>
            </div>
            <div className="flex gap-2">
              <img src={Garage} alt="차고 아이콘" width={16} />
              <div className="text-xs">개러지형 독립공간</div>
            </div>
            <div className="flex gap-2">
              <img src={Light} alt="전구 아이콘" width={16} />
              <div className="text-xs">야간조명</div>
            </div>
          </div>
        </div>

        {/* 세차장 설명 */}
        <div className="overflow-auto text-sm h-80">
          광주 프리미엄 단독 베이 포세이돈워시
          <br />
          누구의 방해도 받지 않고,
          <br />
          탱크가 와도 끄떡없는 넓은 베이!
          <br />
          여름에는 시원하게, 겨울에는 따뜻하게!
          <br />
          봄에도 미세먼지, 꽃가루, 황사 걱정없는
          <br />
          포세이돈워시 용봉점에서 쾌적하게 세차를 즐겨주세요!
          <br />
          전베이 닐스피크 커플러 장착
          <br />
          24시간 항상 오픈하고 있습니다.
          <br />
          <br />
          ★ 베이 안과 화장실에서 흡연은 절대 금지! ★<br />
          ★ 적발 시 세차사용제한 할 수 있습니다. ★<br />
          ★ 세차 중 연장을 희망하신다면 뽀득뽀득 앱에서 이용해주시길 바랍니다!
          (뒤에 예약이 있을 시 연장불가능)
          <br />
          **** 예약 시 한 베이에 두 대의 차량이 와서 세차를 하시면 안됩니다!
          <br />
          <br />
          **** 지인과 함께 예약을 해주시는 고객님들께서는 지점으로 꼭
          연락주세요!
          <br />
          베이를 조정해 드리겠습니다 :)
        </div>
      </div>
    </div>
  );
};

export default MobilePreview;
