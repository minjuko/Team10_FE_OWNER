import RegisterForm from "../organisms/RegisterForm";
import Box from "../atoms/Box";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import {
  deleteImage,
  getCarwashesDetails,
  putCarwashesDetails,
} from "../../apis/carwashes";
import MobilePreview from "../organisms/MobilePreview";
import useRegisterForm from "../../hooks/useRegisterForm";
import { useNavigate, useParams } from "react-router-dom";

const CarwashDetailEditingTemplate = () => {
  const navigate = useNavigate();
  const { carwash_id } = useParams();
  const queryClient = useQueryClient();

  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashDetail", carwash_id],
    queryFn: () => getCarwashesDetails(carwash_id),
  });

  const errorHandler = (error) => {
    const errorCode = error?.response?.data?.error?.code;

    switch (errorCode) {
      case "1201":
        alert("인증에 오류가 발생했습니다. 다시 로그인해주세요.");
        navigate("/login");
        break;
      case "1003":
        alert("모든 데이터가 입력되지 않았습니다. 다시 시도해주세요.");
        break;
      default:
        alert("알 수 없는 오류가 발생했습니다. 홈화면으로 이동합니다.");
        navigate("/");
        break;
    }
  };

  const mutation = useMutation({
    mutationFn: async (inputs) => {
      const formData = new FormData();
      const blob = new Blob(
        [
          JSON.stringify({
            name: inputs.carwashName,
            location: {
              address: inputs.carwashAddress,
              latitude: inputs.latitude,
              longitude: inputs.longitude,
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
            keywordIdList: inputs.keypoint,
            description: inputs.carwashDescription,
            tel: inputs.carwashTel,
          }),
        ],
        { type: "application/json" },
      );

      inputs.carwashImage.forEach((file) => {
        formData.append("imageFileList", file);
      });
      formData.append("updateData", blob);

      return putCarwashesDetails(carwash_id, formData);
    },
    onSuccess: () => {
      alert("정상적으로 수정되었습니다.");
      queryClient.invalidateQueries({
        queryKey: ["getCarwashDetail", carwash_id],
      });
      queryClient.invalidateQueries({ queryKey: ["carwash"] });
      queryClient.invalidateQueries({ queryKey: ["home"] });
      navigate(`/manage/item/${carwash_id}`);
    },
    onError: errorHandler,
  });

  const deleteImageMutation = useMutation({
    mutationFn: (imageId) => deleteImage(imageId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCarwashDetail", carwash_id],
      });
    },
    onError: errorHandler,
  });

  const carwashDetail = data?.data?.response;

  const initialValue = {
    carwashName: carwashDetail.name,
    carwashAddress: carwashDetail.locationDTO.address,
    latitude: carwashDetail.locationDTO.latitude,
    longitude: carwashDetail.locationDTO.longitude,
    carwashTel: carwashDetail.tel,
    pricePer30min: carwashDetail.price,
    weekdayOpenTime: carwashDetail.optime.weekday.start,
    weekdayCloseTime: carwashDetail.optime.weekday.end,
    weekendOpenTime: carwashDetail.optime.weekend.start,
    weekendCloseTime: carwashDetail.optime.weekend.end,
    keypoint: carwashDetail.keywordIdList,
    carwashImage: [],
    carwashDescription: carwashDetail.description,
  };

  const { inputs, handleChange, isDirty } = useRegisterForm(initialValue);

  return (
    <div className="flex-8">
      <Box className="relative grid-8 p-14">
        <button
          type="button"
          aria-label="세차장 정보 수정 닫기"
          onClick={() => navigate(`/manage/item/${carwash_id}`)}
          className="absolute text-3xl leading-none text-gray-400 transition-colors right-6 top-6 hover:text-gray-700"
        >
          ×
        </button>
        <h1 className="text-2xl font-bold">세차장 정보 수정</h1>
          <RegisterForm
          inputs={inputs}
          onChange={handleChange}
          mutation={mutation}
          isDirty={isDirty}
            buttonLabel="수정하기"
            requireImage={false}
            existingImages={carwashDetail.imageFileList}
            onDeleteExisting={(image) => {
              if (window.confirm("이 사진을 삭제하시겠습니까?")) {
                deleteImageMutation.mutate(image.id);
              }
            }}
          />
      </Box>
      <MobilePreview
        inputs={inputs}
        existingImages={carwashDetail.imageFileList}
      />
    </div>
  );
};

export default CarwashDetailEditingTemplate;
