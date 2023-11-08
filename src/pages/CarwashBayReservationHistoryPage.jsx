import { Suspense } from "react";
import CarwashBayReservationHistoryTemplate from "../components/templates/CarwashBayReservationHistoryTemplate";
import { ErrorBoundary } from "react-error-boundary";

const CarwashBayReservationHistoryPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <CarwashBayReservationHistoryTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default CarwashBayReservationHistoryPage;
