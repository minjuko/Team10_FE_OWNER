import { useRef } from "react";
import RegisterFormItemStructure from "../atoms/RegisterFormItemStructure";
import Button from "../atoms/Button";

const ImageUploader = ({ value = [], onChange }) => {
  const fileInputRef = useRef();

  const handleChangeData = (e) => {
    const files = e.target.files;

    if (files[0].size > 200000) {
      return alert("200kb 이하의 이미지만 업로드 가능합니다.");
    }

    if (value.some((item) => item.name === files[0].name)) {
      return alert("이미 같은 이름의 파일이 존재합니다.");
    }

    Array.from(files).forEach((file) => {
      onChange("carwashImage", [...value, file]);
    });

    e.target.value = null; // 파일이 들어있는 input의 value를 초기화
  };

  const handleClickDelete = (e, index) => {
    e.stopPropagation();
    const tmpCarwashImage = [...value];
    tmpCarwashImage.splice(index, 1);

    onChange("carwashImage", tmpCarwashImage);
  };

  const handleClickImage = (index) => {
    if (index === 0) return;
    const tmpCarwashImage = [...value];

    tmpCarwashImage.unshift(tmpCarwashImage[index]);
    tmpCarwashImage.splice(index + 1, 1);
    onChange("carwashImage", tmpCarwashImage);
  };

  return (
    <RegisterFormItemStructure
      label="매장 사진 (200kb 이하)"
      besideLabel={
        <Button
          type="button"
          onClick={() => {
            fileInputRef.current.click();
          }}
          variant="addPhoto">
          + 추가
        </Button>
      }>
      <input
        type="file"
        accept="image/*"
        id="carwashImage"
        name="carwashImage"
        ref={fileInputRef}
        onChange={handleChangeData}
        hidden
      />
      {/* URL.createObjectURL(file) */}
      <div className="flex-4 p-4 overflow-x-auto overflow-y-hidden bg-gray-100 border border-gray-300 outline-none w-96 rounded-xl h-28">
        {value.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-20 h-20 overflow-auto shrink-0 rounded-xl"
              onClick={() => {
                handleClickImage(index);
              }}>
              <img
                className="absolute object-cover w-full h-full"
                src={item instanceof File ? URL.createObjectURL(item) : item}
                alt={`미리보기 ${index}}`}
              />
              {index === 0 && (
                <div className="absolute bottom-0 w-full p-1 text-xs text-center text-white bg-primary font-semobold">
                  프로필
                </div>
              )}
              <Button
                variant="deletePhoto"
                type="button"
                onClick={(e) => handleClickDelete(e, index)}
                className="absolute top-1 right-1">
                ✕
              </Button>
            </div>
          );
        })}
      </div>
    </RegisterFormItemStructure>
  );
};

export default ImageUploader;
