import { Suspense } from "react";
import CarwashDetailEditingTemplate from "../components/templates/CarwashDetailEditingTemplate";
import { ErrorBoundary } from "react-error-boundary";

const CarwashDetailEditingPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CarwashDetailEditingTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashDetailEditingPage;
