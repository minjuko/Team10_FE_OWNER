import { Suspense } from "react";
import CarwashDetailEditingTemplate from "../components/templates/CarwashDetailEditingTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashDetailEditingPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<LoadingAnimation />}>
        <CarwashDetailEditingTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashDetailEditingPage;
