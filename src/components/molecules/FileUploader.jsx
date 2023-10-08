import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import "./FileUploader.css";

const FileUploader = () => {
  const [fileList, setFileList] = useState([]);
  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    const tmpFileList = [];
    const files = e.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const preview_URL = URL.createObjectURL(file);
        const fileType = file.type.split("/")[0];
        if (fileType === "image") {
          tmpFileList.push({
            fileObject: files[i],
            preview_URL: preview_URL,
            type: fileType,
          });
        }
      }
    }
    setFileList([...tmpFileList, ...fileList]);
  };

  const deleteImage = (index) => {
    const tmpFileList = [...fileList];
    tmpFileList.splice(index, 1);
    setFileList(tmpFileList);
  };

  useEffect(() => {
    return () => {
      fileList?.forEach((item) => {
        URL.revokeObjectURL(item.preview_URL);
      });
    };
  }, []);

  return (
    <div className="uploader-wrapper">
      <div className="flex flex-col mt-2">
        <div className="flex flex-item gap-[220px]">
          <label className="text-start text-gray-700 text-base">매장사진</label>
          <Button
            type="addPhoto"
            label="+ 추가"
            onClick={() => inputRef.click()}>
            추가
          </Button>
        </div>
        <div className="file-container overflow-x-auto flex gap-4">
          {fileList?.map((item, index) => (
            <div className="file-wrapper" key={index}>
              {item.type === "image" ? (
                <img
                  src={item.preview_URL}
                  alt={`Preview of ${index}`}
                  className="square-image"
                />
              ) : null}
              <Button
                type="deletePhoto"
                className="delete-button"
                label="X"
                onClick={() => {
                  deleteImage(index);
                }}></Button>
            </div>
          ))}
        </div>
      </div>
      <input
        type="file"
        multiple={true}
        accept="image/*"
        onChange={saveImage}
        onClick={(e) => (e.target.value = null)}
        ref={(refParam) => (inputRef = refParam)}
        className="hidden"
      />
    </div>
  );
};

export default FileUploader;
