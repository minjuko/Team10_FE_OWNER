import Loader from "/loader.gif";

const LoadingAnimation = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        src={Loader}
        alt="로딩 애니메이션"
        className="absolute -translate-x-5 -translate-y-1/2 top-1/2 left-1/2"
      />
    </div>
  );
};

export default LoadingAnimation;
