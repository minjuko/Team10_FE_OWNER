import { Suspense } from "react";
import CarwashItemManagementTemplate from "../components/templates/CarwashItemManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";

const CarwashItemManagementPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CarwashItemManagementTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashItemManagementPage;
