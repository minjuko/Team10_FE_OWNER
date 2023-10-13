import Box from "../atoms/Box";

/**
 * Card 컴포넌트
 * 상단 제목영역과 하단 내용영역으로 구성되어 있습니다.
 *
 * @param {title} 제목
 * @param {children} 내용
 */

const Card = ({ title, children }) => {
  return (
    <div className="w-64 bg-white rounded-xl shadow-2xl overflow-auto">
      <div className="bg-primary text-white font-semibold text-center p-4">
        {title}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
