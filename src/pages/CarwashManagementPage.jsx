import { Suspense } from "react";
import CarwashManagementTemplate from "../components/templates/CarwashManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashManagementPage = () => {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <CarwashManagementTemplate />
    </Suspense>
  );
};

export default CarwashManagementPage;
