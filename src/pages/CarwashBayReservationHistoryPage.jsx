import { Suspense } from "react";
import CarwashBayReservationHistoryTemplate from "../components/templates/CarwashBayReservationHistoryTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const CarwashBayReservationHistoryPage = () => {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <CarwashBayReservationHistoryTemplate />
    </Suspense>
  );
};

export default CarwashBayReservationHistoryPage;
