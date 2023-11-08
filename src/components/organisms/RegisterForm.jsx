import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";
import KeyPointSelector from "../molecules/KeyPointSelector";
import RegisterFormItemStructure from "../atoms/RegisterFormItemStructure";
import DaumPostcodePicker from "../molecules/DaumPostcodePicker";
import ImageUploader from "../molecules/ImageUploader";
import OpTimePicker from "../molecules/OpTimePicker";
import { useEffect, useState } from "react";
import { isEmpty } from "../../utils/isEmpty";

const pointLabels = [
  "하부세차",
  "개러지형 독립공간",
  "야간조명",
  "100% 수돗물",
  "휴게실",
  "에어컨",
  "발수코팅건",
];

const ERROR_MESSAGE = {
  required: "필수 항목이 입력되지 않았습니다.",
  onlyNumber: "전화번호는 숫자만 입력해주세요.",
};

/**
 * RegisterForm
 *
 * 세차장 입점신청 폼입니다.
 *
 * @todo 각 input에 대한 validation 필요
 */
const RegisterForm = ({ inputs, onChange, mutation, isDirty, buttonLabel }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const validate = () => {
    if (
      inputs.carwashName === "" ||
      inputs.carwashAddress === "" ||
      inputs.carwashTel === "" ||
      inputs.pricePer30min === "" ||
      inputs.weekdayOpenTime === "" ||
      inputs.weekdayCloseTime === "" ||
      inputs.weekendOpenTime === "" ||
      inputs.weekendCloseTime === "" ||
      isEmpty(inputs.keypoint) ||
      isEmpty(inputs.carwashImage) ||
      inputs.carwashDescription === ""
    ) {
      setErrorMessage(ERROR_MESSAGE.required);
      return false;
    } else if (isNaN(inputs.carwashTel)) {
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
      return false;
    }
    setErrorMessage("");
    return true;
  };

  useEffect(() => {
    validate() ? setIsDisabled(false) : setIsDisabled(true);
  }, [inputs]);

  useEffect(() => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(inputs.carwashAddress, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        onChange("latitude", result[0].y);
        onChange("longitude", result[0].x);
      }
    });
  }, [inputs.carwashAddress]);

  return (
    <form
      className="grid gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        if (isDirty) mutation.mutate(inputs);
        else alert("변경사항이 없습니다.");
      }}>
      {/* Wrapper */}
      <div className="flex gap-8">
        {/* 왼쪽 영역 */}
        <section className="grid gap-4">
          {/* 매장명 */}
          <RegisterFormItemStructure label="매장명">
            <TextInput
              name="carwashName"
              type="text"
              value={inputs.carwashName}
              onChange={(e) => {
                onChange(e.target.name, e.target.value);
              }}
              placeholder="○○세차장"
            />
          </RegisterFormItemStructure>

          {/* 주소 */}
          <RegisterFormItemStructure label="주소">
            <DaumPostcodePicker
              value={inputs.carwashAddress}
              onChange={onChange}
            />
          </RegisterFormItemStructure>

          {/* 전화번호 */}
          <RegisterFormItemStructure label="전화번호">
            <TextInput
              name="carwashTel"
              type="tel"
              value={inputs.carwashTel}
              onChange={(e) => {
                onChange(e.target.name, e.target.value);
              }}
              placeholder="전화번호"
            />
          </RegisterFormItemStructure>

          {/* 30분 당 금액 */}
          <RegisterFormItemStructure label="30분 당 금액">
            <TextInput
              name="pricePer30min"
              type="number"
              value={inputs.pricePer30min}
              onChange={(e) => {
                onChange(e.target.name, e.target.value);
              }}
              placeholder="30분 당 금액"
            />
          </RegisterFormItemStructure>

          {/* 영업시간 */}
          <OpTimePicker
            weekdayOpenTime={inputs.weekdayOpenTime}
            weekdayCloseTime={inputs.weekdayCloseTime}
            weekendOpenTime={inputs.weekendOpenTime}
            weekendCloseTime={inputs.weekendCloseTime}
            onChange={onChange}
          />
        </section>

        {/* 오른쪽 영역 */}
        <section className="grid gap-4">
          {/*매장 사진*/}
          <ImageUploader value={inputs.carwashImage} onChange={onChange} />

          {/* 키포인트 */}
          <RegisterFormItemStructure label="키포인트">
            <KeyPointSelector
              value={inputs.keypoint}
              pointLabels={pointLabels}
              handleChange={onChange}
            />
          </RegisterFormItemStructure>

          {/* 매장 설명 */}
          <RegisterFormItemStructure label="매장 설명">
            <textarea
              className="block p-4 bg-gray-100 border border-gray-300 outline-none resize-none h-52 w-96 rounded-xl"
              name="carwashDescription"
              value={inputs.carwashDescription}
              onChange={(e) => {
                onChange(e.target.name, e.target.value);
              }}
              placeholder="매장 설명"
            />
          </RegisterFormItemStructure>
        </section>
      </div>

      {/* 하단 버튼 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <small className="text-red-500">{errorMessage}</small>
        <Button type="submit" style="long" disabled={isDisabled}>
          {buttonLabel}
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
