import { Suspense } from "react";
import CarwashBayReservationHistoryTemplate from "../components/templates/CarwashBayReservationHistoryTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashBayReservationHistoryPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<LoadingAnimation />}>
        <CarwashBayReservationHistoryTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashBayReservationHistoryPage;
