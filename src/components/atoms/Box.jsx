/**
 * Box 컴포넌트
 *
 * 둥근 테두리와 그림자가 있는 박스 컴포넌트
 *
 * @param {string} className - 추가할 클래스
 * @param {React.ReactNode} children - 자식 컴포넌트
 */
const Box = ({ className, children }) => {
  return (
    <div className={`bg-white rounded-xl shadow-2xl ${className}`}>
      {children}
    </div>
  );
};

export default Box;
