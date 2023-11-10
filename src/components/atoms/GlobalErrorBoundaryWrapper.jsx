import { useNavigate } from "react-router-dom";
import GlobalErrorBoundary from "./GlobalErrorBoundary";
import ErrorFallback from "./ErrorFallback";

const GlobalErrorBoundaryWrapper = ({ children }) => {
  const navigate = useNavigate();

  return (
    <GlobalErrorBoundary navigate={navigate} FallbackComponent={ErrorFallback}>
      {children}
    </GlobalErrorBoundary>
  );
};

export default GlobalErrorBoundaryWrapper;
