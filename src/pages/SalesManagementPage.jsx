import { Suspense } from "react";
import SalesManagementTemplate from "../components/templates/SalesManagementTemplate";
import { ErrorBoundary } from "react-error-boundary";

const SalesManagementPage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <SalesManagementTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default SalesManagementPage;
