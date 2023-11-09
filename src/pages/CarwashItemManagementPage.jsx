import { Suspense } from "react";
import CarwashItemManagementTemplate from "../components/templates/CarwashItemManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashItemManagementPage = () => {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <CarwashItemManagementTemplate />
    </Suspense>
  );
};

export default CarwashItemManagementPage;
