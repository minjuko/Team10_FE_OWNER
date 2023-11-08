import { Suspense } from "react";
import CarwashManagementTemplate from "../components/templates/CarwashManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";

const CarwashManagementPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CarwashManagementTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashManagementPage;
