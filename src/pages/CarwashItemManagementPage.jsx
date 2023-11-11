import { Suspense } from "react";
import CarwashItemManagementTemplate from "../components/templates/CarwashItemManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";
import FallbackLayout from "../components/atoms/FallbackLayout";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const errorCode = error.response.data.error.code;

  switch (errorCode) {
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

const CarwashItemManagementPage = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<LoadingAnimation />}>
        <CarwashItemManagementTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashItemManagementPage;
