import { Suspense } from "react";
import CarwashDetailEditingTemplate from "../components/templates/CarwashDetailEditingTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";
import FallbackLayout from "../components/atoms/FallbackLayout";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const errorCode = error.response.data.error.code;

  switch (errorCode) {
    case "1201":
      return (
        <FallbackLayout
          message="로그인이 필요한 페이지입니다."
          buttonLabel="로그인"
          to="/login"
        />
      );
    case "1301":
      return (
        <FallbackLayout
          message="세차장을 찾을 수 없습니다."
          buttonLabel="홈으로"
          to="/"
        />
      );
    default:
      return (
        <FallbackLayout
          message="알 수 없는 오류가 발생했습니다."
          buttonLabel="홈으로"
          to="/"
        />
      );
  }
};

const CarwashDetailEditingPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingAnimation />}>
        <CarwashDetailEditingTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashDetailEditingPage;
