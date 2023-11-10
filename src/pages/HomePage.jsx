import { Suspense } from "react";
import HomeTemplate from "../components/templates/HomeTemplate";
import { ErrorBoundary } from "react-error-boundary";
import LoadingAnimation from "../components/atoms/LoadingAnimation";

const HomePage = () => {
  return (
    <Suspense fallback={<LoadingAnimation />}>
      <HomeTemplate />
    </Suspense>
  );
};

export default HomePage;
