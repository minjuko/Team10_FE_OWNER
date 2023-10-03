import React, { useState } from "react";
import { TextInput } from '../atoms/TextInput';
import { Button } from "../atoms/Button";
import TextboxWithButton from "../molecules/TextboxWithButton";
import { TextArea } from '../atoms/TextArea';
import { Box } from "../atoms/Box";
import TimeSelector from "../molecules/TimeSelector";
import KeyPoint from "../molecules/KeyPoint";
import FileUploader from "../molecules/FileUploader";

const RegisterForm = () => {

    const [selectedPoints, setSelectedPoints] = useState([]); 
    const [weekdayStartTime, setWeekdayStartTime] = useState(new Date()); 
    const [weekdayEndTime, setWeekdayEndTime] = useState(new Date()); 
    const [weekendStartTime, setWeekendStartTime] = useState(new Date()); 
    const [weekendEndTime, setWeekendEndTime] = useState(new Date()); 
    const pointLabels = ['하부세차', '개러지형 독립공간', '야간조명', '100% 수돗물', '휴게실', '에어컨', '발수코팅건'];

    return (
        <Box size='registerbox' className="justify-center">
          {/*제목 텍스트*/}
          <div className="text-[32px] font-bold mt-12">입점을 환영합니다!</div>
          <div className="text-gray-500 text-base mt-4">아래 정보들을 입력해주세요</div>
          <div className="info flex justify-between">
            {/*왼쪽 영역 정보*/}
            <div className="left-info pr-4">
              {/*매장명*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">매장명</label>
                <TextInput placeholder="OO세차장" name="registerform-long"/>
              </div>
              {/*주소*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">주소</label>
                <TextboxWithButton
                  type="text"
                  name="username"
                  placeholder="주소"
                  buttonlabel="주소찾기"
                  onClick=""
                />
              </div>
              {/*전화번호*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">전화번호</label>
                <TextInput placeholder="전화번호" name="registerform-long"/>
              </div>
              {/*30분당 금액*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">30분당 금액</label>
                <TextInput placeholder="30분당 금액" name="registerform-long"/>
              </div>
              {/*영업시간*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">영업시간</label>
                <div className="flex flex-item mt-2">
                  <label className="text-start text-gray-700 text-base mt-4 pl-4">평일</label>
                  <TimeSelector
                    startTime={weekdayStartTime}
                    setStartTime={setWeekdayStartTime}
                    endTime={weekdayEndTime}
                    setEndTime={setWeekdayEndTime}
                  />
                </div>
                <div className="flex flex-item mt-2">
                  <label className="text-start text-gray-700 text-base mt-4 pl-4">주말</label>
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
                <FileUploader/>
              {/*키포인트*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">키포인트</label>
                <KeyPoint pointLabels={pointLabels} selectedPoints={selectedPoints}/>
              </div>
              {/*매장 설명*/}
              <div className="flex flex-col mt-4">
                <label className="text-start text-gray-700 text-base pl-4">매장 설명</label>
                <TextArea size={'register-intro'} placeholder={'내용 입력'} label={'매장 설명'}></TextArea>
              </div>
            </div>

          </div>
          {/*입점신청*/}
          <Button
            type="long"
            label="입점신청"
          />
        </Box>
    );
}

export default RegisterForm;
