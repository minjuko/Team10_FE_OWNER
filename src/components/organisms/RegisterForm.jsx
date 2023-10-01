import React, { useState } from "react";
import { TextInput } from '../atoms/TextInput';
import { TextArea } from '../atoms/TextArea';
import { Box } from "../atoms/Box";
import TimeSelector from "../molecules/TimeSelector";
import KeyPoint from "../molecules/KeyPoint";
import FileUploader from "../molecules/FileUploader";

const RegisterForm = () => {
    const [selectedPoints, setSelectedPoints] = useState([]); // 선택한 키포인트 배열
    const [weekdayStartTime, setWeekdayStartTime] = useState(new Date()); // 평일 시작 시간 상태
    const [weekdayEndTime, setWeekdayEndTime] = useState(new Date()); // 평일 종료 시간 상태
    const [weekendStartTime, setWeekendStartTime] = useState(new Date()); // 주말 시작 시간 상태
    const [weekendEndTime, setWeekendEndTime] = useState(new Date()); // 주말 종료 시간 상태
    const pointLabels = ['하부세차', '개러지형 독립공간', '야간조명', '100% 수돗물', '휴게실', '에어컨', '발수코팅건'];

    return (
        <Box size={'medium'}>
          <div className="text-[32px] font-bold mt-12">입점을 환영합니다</div>
          <div className="text-gray-400 text-base mt-4">아래 정보들을 입력해주세요</div>
          <div className="flex justify-between">
            <div className="left-info flex flex-col w-1/2"> {/* 왼쪽 영역, w-1/2는 가로 반분을 차지함 */}
              <div className="flex flex-col mt-2">
                <label className="text-start text-gray-800 text-base pl-6">매장명</label>
                <TextInput placeholder="OO세차장" className="mt-1" />
              </div>
        
              <div className="flex flex-col mt-8">
                <label className="text-start text-gray-800 text-base pl-6">주소</label>
                <TextInput placeholder="주소" className="mt-1" />
              </div>
        
              <div className="flex flex-col mt-8">
                <label className="text-start text-gray-800 text-base pl-6">전화번호</label>
                <TextInput placeholder="전화번호" className="mt-1" />
              </div>
        
              <div className="flex flex-col mt-8">
                <label className="text-start text-gray-800 text-base pl-6">30분당 금액</label>
                <TextInput placeholder="30분당 금액" className="mt-1" />
              </div>

              <div className="flex flex-col mt-8">
                <label className="text-start text-gray-800 text-base pl-6">평일</label>
                <TimeSelector
                  label="평일"
                  startTime={weekdayStartTime}
                  setStartTime={setWeekdayStartTime}
                  endTime={weekdayEndTime}
                  setEndTime={setWeekdayEndTime}
                />
              </div>
        
              <div className="flex flex-col mt-8">
                <label className="text-start text-gray-800 text-base pl-6">주말</label>
                <TimeSelector
                  label="주말"
                  startTime={weekendStartTime}
                  setStartTime={setWeekendStartTime}
                  endTime={weekendEndTime}
                  setEndTime={setWeekendEndTime}
                />
              </div>
            </div>
        
            <div className="right-info flex flex-col w-1/2"> {/* 오른쪽 영역, w-1/2는 가로 반분을 차지함 */}
              {/* 사진 업로드 영역 */}
              <div className="mt-8 ml-6">
                <FileUploader />
              </div>
              <div className="mt-8 ml-6">
                {/* 키포인트 */}
                <KeyPoint pointLabels={pointLabels} selectedPoints={selectedPoints}/>
              </div>
              <div className="mt-8 ml-6"> {/* 매장 설명은 왼쪽 영역의 하단에 배치 */}
            <TextArea size={'register'} placeholder={'내용 입력'} label={'매장 설명'}></TextArea>
          </div>
            </div>
            
          </div>
        
         
        </Box>
    );
}

export default RegisterForm;
