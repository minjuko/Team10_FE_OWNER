import { useNavigate } from "react-router-dom";
import Button from "./Button";
import LogoGray from "/logo_gray.svg";

const ErrorFallback = ({ message, buttonLabel, to }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={LogoGray} alt="뽀득뽀득 로고" className="w-48" />
      <div className="text-xl">{message}</div>
      <Button
        style="long"
        onClick={() => {
          navigate(to);
        }}>
        {buttonLabel}
      </Button>
    </div>
  );
};

export default ErrorFallback;
