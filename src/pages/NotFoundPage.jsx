import Button from "../components/atoms/Button";
import NotFound from "/notfound.svg";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={NotFound} alt="에러코드 404" className="w-64" />
      <div>페이지를 찾을 수 없습니다.</div>
      <Button style="long" to="/">
        홈으로
      </Button>
    </div>
  );
};

export default NotFoundPage;
