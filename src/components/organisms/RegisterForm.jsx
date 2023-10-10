import React, { useState, useEffect } from "react";
import { TextInput } from "../atoms/TextInput";
import { Button } from "../atoms/Button";

import { TextArea } from "../atoms/TextArea";
import { Box } from "../atoms/Box";
import TimeSelector from "../molecules/TimeSelector";
import FileUploader from "../molecules/FileUploader";
import KeyPointSelector from "../molecules/KeyPointSelector";
import DaumPostcode from "react-daum-postcode";

const RegisterForm = () => {
  
  const [storeName, setStoreName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [weekdayStartTime, setWeekdayStartTime] = useState(new Date());
  const [weekdayEndTime, setWeekdayEndTime] = useState(new Date());
  const [weekendStartTime, setWeekendStartTime] = useState(new Date());
  const [weekendEndTime, setWeekendEndTime] = useState(new Date());
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

  const handleNumberChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = numericValue;
  };

  const handle = {
    clickButton: () => {
        setOpenPostcode(current => !current);
    },

    selectAddress: (data) => {
        console.log(`
            주소: ${data.address},
        `)
        const selectedAddress = data.address;
        setAddress(selectedAddress);
        setOpenPostcode(false);
    },
}

  return (
    <Box size="registerBox" className="justify-center">
      {/*제목 텍스트*/}
      <div className="text-[32px] font-bold mt-12">입점을 환영합니다!</div>
      <div className="text-gray-500 text-base mt-4">
        아래 정보들을 입력해주세요
      </div>
      <div className="info flex justify-between">
        {/*왼쪽 영역 정보*/}
        <div className="left-info pr-4">
          {/*매장명*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">매장명</label>
            <TextInput
              placeholder="OO세차장"
              name="registerform-long"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </div>
          {/*주소*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">주소</label>
            <div className="flex flex-items">
            <TextInput 
              type="registerform-medium"
              name="username"
              placeholder="주소"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // 주소 입력 변경 시 state 업데이트
            />
            <Button type="withTextInput" label="주소 찾기" onClick={handle.clickButton}/>
            {openPostcode && (
              <DaumPostcode
                onComplete={handle.selectAddress}
                autoClose={false}
                defaultQuery="판교역로 235"
                style={{ position: "absolute", zIndex: 1000, width: "40%" }}
              />
            )}
            </div>
          </div>
          {/*전화번호*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">
              전화번호
            </label>
            <TextInput
              placeholder="전화번호"
              name="registerform-long"
              onChange={handleNumberChange} // 숫자 입력을 제한하는 이벤트 핸들러
            />
          </div>
          {/*30분당 금액*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">
              30분당 금액
            </label>
            <TextInput
              placeholder="30분당 금액"
              name="registerform-long"
              onChange={handleNumberChange}
            />
          </div>
          {/*영업시간*/}
          <div className="flex flex-col gap-[0px]">
            <label className="text-start text-gray-700 text-base mt-6">
              영업시간
            </label>
            <div className="flex flex-item mt-2">
              <label className="text-start text-gray-700 text-base mt-10">
                평일
              </label>
              <TimeSelector
                startTime={weekdayStartTime}
                setStartTime={setWeekdayStartTime}
                endTime={weekdayEndTime}
                setEndTime={setWeekdayEndTime}
              />
            </div>
            <div className="flex flex-item mt-2">
              <label className="text-start text-gray-700 text-base mt-10">
                주말
              </label>
              <TimeSelector
                startTime={weekendStartTime}
                setStartTime={setWeekendStartTime}
                endTime={weekendEndTime}
                setEndTime={setWeekendEndTime}
              />
            </div>
          </div>
        </div>
        {/*오른쪽 영역 정보*/}
        <div className="right-info pl-4">
          {/*매장 사진*/}
          <FileUploader />
          {/*키포인트*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">키포인트</label>
            <KeyPointSelector
              pointLabels={pointLabels}
              selectedPoints={selectedPoints}
            />
          </div>
          {/*매장 설명*/}
          <div className="flex flex-col mt-4">
            <label className="text-start text-gray-700 text-base">
              매장 설명
            </label>
            <TextArea
              size={"register-intro"}
              placeholder={"내용 입력"}
              label={"매장 설명"}
            ></TextArea>
          </div>
        </div>
      </div>
      {/*입점신청*/}
      <Button type="long" label="입점신청"/>
    </Box>
  );
};

export default RegisterForm;
