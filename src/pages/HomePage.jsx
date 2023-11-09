import { Suspense } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const HomePage = () => {
  return (
    <ErrorBoundary fallback={<div>Error occurred!</div>}>
      <Suspense fallback={<LoadingAnimation />}>
        <HomeTemplate />
      </Suspense>
    </ErrorBoundary>
  );
};

export default HomePage;
