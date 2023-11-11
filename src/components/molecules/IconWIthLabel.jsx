import React from "react";

const SIZES = {
  xl: {
    iconSize: "w-4 h-4",
    labelSize: "text-xs",
  },
  sm: {
    iconSize: "w-4 h-4",
    labelSize: "text-sm",
  },
  base: {
    iconSize: "w-5 h-5",
    labelSize: "text-base",
  },
  lg: {
    iconSize: "w-6 h-6",
    labelSize: "text-lg",
  },
};

/**
 * IconWithLabel 컴포넌트
 *
 * 아이콘과 라벨이 함께 있는 컴포넌트
 * @param {String} src - 아이콘 경로
 * @param {String} alt - 아이콘 대체 텍스트
 * @param {React.ReactNode} label - 라벨
 * @param {String} size - 아이콘 및 라벨 크기
 */
const IconWithLabel = ({ src, alt, label, size = "md" }) => {
  return (
    <div className="flex-items-center-1">
      <img className={SIZES[size].iconSize} src={src} alt={alt} />
      <div className={SIZES[size].labelSize}>{label}</div>
    </div>
  );
};

export default IconWithLabel;
