import React from "react";
import RegisterForm from "../components/organisms/RegisterForm";
import Box from "../components/atoms/Box";
import { useMutation } from "@tanstack/react-query";
import { register } from "../apis/carwashes";
import useRegisterForm from "../hooks/useRegisterForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import FallbackLayout from "../components/atoms/FallbackLayout";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <FallbackLayout
      message="데이터를 불러오는 중 오류가 발생했습니다."
      resetErrorBoundary={resetErrorBoundary}
    />
  );
};

const RegisterPage = () => {
  const userName = useSelector((state) => state.auth.userName);
  const navigate = useNavigate();

  const errorHandler = (error) => {
    const errorCode = error.response.data.error.code;

    switch (errorCode) {
      case "1201":
        alert("인증에 오류가 발생했습니다. 다시 로그인해주세요.");
        navigate("/login");
        break;
      case "1003":
        alert("모든 데이터가 입력되지 않았습니다. 다시 시도해주세요.");
        break;
      default:
        alert("알 수 없는 오류가 발생했습니다. 홈화면으로 이동합니다.");
        navigate("/");
        break;
    }
  };

  const mutation = useMutation({
    mutationFn: (inputs) => {
      const formData = new FormData();
      const blob = new Blob(
        [
          JSON.stringify({
            name: inputs.carwashName,
            location: {
              address: inputs.carwashAddress,
              latitude: inputs.latitude,
              longitude: inputs.longitude,
            },
            price: inputs.pricePer30min,
            optime: {
              weekday: {
                start: inputs.weekdayOpenTime,
                end: inputs.weekdayCloseTime,
              },
              weekend: {
                start: inputs.weekendOpenTime,
                end: inputs.weekendCloseTime,
              },
            },
            keywordIdList: inputs.keypoint,
            description: inputs.carwashDescription,
            tel: inputs.carwashTel,
          }),
        ],
        { type: "application/json" }
      );

      inputs.carwashImage.forEach((file) => {
        formData.append("imageFileList", file);
      });
      formData.append("carwash", blob);

      return register(formData);
    },
    onSuccess: () => {
      alert("정상적으로 등록되었습니다.");
      navigate("/");
    },
    onError: errorHandler,
  });

  const initialValue = {
    carwashName: "",
    carwashAddress: "",
    latitude: "",
    longitude: "",
    carwashTel: "",
    pricePer30min: "",
    weekdayOpenTime: "",
    weekdayCloseTime: "",
    weekendOpenTime: "",
    weekendCloseTime: "",
    keypoint: [],
    carwashImage: [],
    carwashDescription: "",
  };

  const { inputs, handleChange, isDirty } = useRegisterForm(initialValue);

  return (
    <div className="items-center w-screen h-screen flex-center">
      <Box className="grid-8 p-14">
        {/*제목 텍스트*/}
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <div className="text-center grid-4">
            <h1 className="text-3xl font-bold">
              {userName} 사장님, 입점을 환영합니다!
            </h1>
            <div className="text-gray-500">아래 정보들을 입력해주세요.</div>
          </div>

          <RegisterForm
            inputs={inputs}
            onChange={handleChange}
            mutation={mutation}
            isDirty={isDirty}
            buttonLabel="입점신청"
          />
        </ErrorBoundary>
      </Box>
    </div>
  );
};

export default RegisterPage;
