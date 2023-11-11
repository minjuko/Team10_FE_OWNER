import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Warning from "/warning.svg";

const FallbackLayout = ({ message, resetErrorBoundary, buttonLabel, to }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-col justify-center flex-items-center-4">
      <img src={Warning} alt="느낌표" className="w-20" />

      <div>{message}</div>

      {to && buttonLabel && (
        <Button
          variant="long"
          onClick={() => {
            navigate(to);
          }}>
          {buttonLabel}
        </Button>
      )}

      {resetErrorBoundary && (
        <Button variant="long" onClick={resetErrorBoundary}>
          재시도
        </Button>
      )}
    </div>
  );
};

export default FallbackLayout;
