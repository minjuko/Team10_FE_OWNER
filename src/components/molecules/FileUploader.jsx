import { useEffect, useState } from 'react';
import { Button } from '../atoms/Button';
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
        const preview_URL = URL.createObjectURL(files[i]);
        const fileType = files[i].type.split("/")[0];
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
  }

  useEffect(() => {
    return () => {
      fileList?.forEach((item) => {
        URL.revokeObjectURL(item.preview_URL);
      })
    }
  }, [])

  return (
    <div className="uploader-wrapper">
      <div className="flex items-center mt-8">
        <label className="text-start text-gray-800 text-base pl-6 mr-10">매장 사진</label>
        <Button type="addPhoto" label="+" onClick={() => inputRef.click()} />
      </div>
      <div>
        <input
          type="file" multiple={true} accept="image/*"
          onChange={saveImage}
          onClick={(e) => e.target.value = null}
          ref={(refParam) => (inputRef = refParam)}
          className="hidden"
        />
        <div className="file-container">
          {fileList?.map((item, index) => (
            <div className="file-wrapper" key={index}>
              {item.type === "image" ? (
                <img src={item.preview_URL} alt={`Preview of ${index}`} />
              ) : null}
              <div className="delete-button" onClick={() => { deleteImage(index) }}>
                <Button type="small" label="삭제" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FileUploader;
