import RegisterForm from "../organisms/RegisterForm";
import Box from "../atoms/Box";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { getCarwashesDetails, putCarwashesDetails } from "../../apis/carwashes";
import MobilePreview from "../organisms/MobilePreview";
import useRegisterForm from "../../hooks/useRegisterForm";
import { useNavigate, useParams } from "react-router-dom";

const CarwashDetailEditingTemplate = () => {
  const navigate = useNavigate();
  const carwash_id = useParams().carwash_id;

  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashDetail"],
    queryFn: () => getCarwashesDetails(carwash_id),
  });

  // 이미지 파일 또는 URL을 FormData에 추가하는 함수
  // URL 형식일 경우 Blob 형태로 변환하여 추가
  async function appendFilesToFormData(formData, fileOrUrl) {
    if (fileOrUrl instanceof File) {
      // 이미 File 객체인 경우
      formData.append("images", fileOrUrl);
    } else if (typeof fileOrUrl === "string") {
      // URL인 경우
      try {
        const response = await fetch(fileOrUrl);
        const blob = await response.blob();
        const filename = fileOrUrl.split("/").pop(); // URL에서 파일명 추출
        formData.append("images", new File([blob], filename));
      } catch (error) {
        console.error("File download failed:", error);
      }
    }
  }

  const mutation = useMutation({
    mutationFn: (inputs) => {
      const formData = new FormData();
      console.log("inputs.carwashImage", inputs.carwashImage);
      inputs.carwashImage.forEach((file) => {
        appendFilesToFormData(formData, file);
      });

      formData.append(
        "carwash",
        JSON.stringify({
          name: inputs.carwashName,
          region: {
            placeName: inputs.carwashName,
            address: inputs.carwashAddress,
            latitude: 0,
            longitude: 0,
          },
          price: inputs.pricePer30min,
          optime: {
            weekday: {
              start: inputs.weekdayOpenTime,
              end: inputs.weekdayCloseTime,
            },
            weekend: {
              start: inputs.weekendOpenTime,
              end: inputs.weekendCloseTime,
            },
          },
          keywordId: inputs.keypoint,
          description: inputs.carwashDescription,
          tel: inputs.carwashTel,
        })
      );

      return putCarwashesDetails(carwash_id, formData);
    },
    onSuccess: () => {
      alert("정상적으로 수정되었습니다.");
      navigate(`/manage/item/${carwash_id}`);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const carwashDetail = data?.data?.response;

  const initialValue = {
    carwashName: carwashDetail.name,
    carwashAddress: carwashDetail.location.address,
    carwashTel: carwashDetail.tel,
    pricePer30min: carwashDetail.price,
    weekdayOpenTime: carwashDetail.optime.weekday.start,
    weekdayCloseTime: carwashDetail.optime.weekday.end,
    weekendOpenTime: carwashDetail.optime.weekend.start,
    weekendCloseTime: carwashDetail.optime.weekend.end,
    keypoint: carwashDetail.optime.keypointId,
    carwashImage: carwashDetail.image,
    carwashDescription: carwashDetail.optime.des,
  };

  const [inputs, handleChange] = useRegisterForm(initialValue);

  return (
    <div className="flex gap-8">
      <Box className="grid gap-8 p-14">
        <div className="text-2xl font-bold">세차장 정보 수정</div>
        <RegisterForm
          inputs={inputs}
          onChange={handleChange}
          mutation={mutation}
          buttonLabel="수정하기"
        />
      </Box>
      <MobilePreview inputs={inputs} />
    </div>
  );
};

export default CarwashDetailEditingTemplate;
