import { Suspense } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { ErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <HomeTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePage;
