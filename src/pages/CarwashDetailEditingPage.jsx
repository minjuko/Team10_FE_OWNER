import { Suspense } from "react";
import CarwashDetailEditingTemplate from "../components/templates/CarwashDetailEditingTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashDetailEditingPage = () => {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <CarwashDetailEditingTemplate />
    </Suspense>
  );
};

export default CarwashDetailEditingPage;
