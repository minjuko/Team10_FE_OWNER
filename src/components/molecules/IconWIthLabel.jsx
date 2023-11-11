import React from "react";
import MobileSpriteSVG from "/mobile_icons.svg";

/**
 * IconWithLabel 컴포넌트
 *
 * 아이콘과 라벨이 함께 있는 컴포넌트
 * @param {String} icon - 아이콘 이름
 * @param {String} label - 라벨
 */
const IconWithLabel = ({ icon, label }) => {
  return (
    <div className="flex-items-center-1">
      <svg width="20" height="20">
        <use href={`${MobileSpriteSVG}#${icon}`} />
      </svg>
      <div>{label}</div>
    </div>
  );
};

export default IconWithLabel;
