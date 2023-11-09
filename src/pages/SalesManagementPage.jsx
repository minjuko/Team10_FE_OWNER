import { Suspense } from "react";
import SalesManagementTemplate from "../components/templates/SalesManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const SalesManagementPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<LoadingAnimation />}>
        <SalesManagementTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SalesManagementPage;
