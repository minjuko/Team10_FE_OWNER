import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button";
import NotFound from "/notfound.svg";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={NotFound} alt="에러코드 404" className="w-64" />
      <p className="text-xl">페이지를 찾을 수 없습니다.</p>
      <Button
        style="long"
        onClick={() => {
          navigate("/");
        }}>
        홈으로
      </Button>
    </div>
  );
};

export default NotFoundPage;
