import RegisterForm from "../organisms/RegisterForm";
import Box from "../atoms/Box";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { getCarwashesDetails, putCarwashesDetails } from "../../apis/carwashes";
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
        { type: "application/json" }
      );

      for (const file of inputs.carwashImage) {
        formData.append("imageFileList", file);
      }
      formData.append("updateData", blob);

      return putCarwashesDetails(carwash_id, formData);
    },
    onSuccess: () => {
      alert("정상적으로 수정되었습니다.");
      queryClient.refetchQueries(["carwashItem"]);
      navigate(`/manage/item/${carwash_id}`);
    },
    onError: errorHandler,
  });

  const carwashDetail = data?.data?.response;

  const imageFileList = carwashDetail?.imageFileList?.map((item) => {
    return item.url;
  });

  const initialValue = {
    carwashName: carwashDetail.name,
    carwashAddress: carwashDetail.locationDTO.address,
    latitude: "",
    longitude: "",
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
      <Box className="grid-8 p-14">
        <div className="text-2xl font-bold">세차장 정보 수정</div>
        <RegisterForm
          inputs={inputs}
          onChange={handleChange}
          mutation={mutation}
          isDirty={isDirty}
          buttonLabel="수정하기"
        />
      </Box>
      <MobilePreview inputs={inputs} />
    </div>
  );
};

export default CarwashDetailEditingTemplate;
