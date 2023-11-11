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
            keywordId: inputs.keypoint,
            description: inputs.carwashDescription,
            tel: inputs.carwashTel,
          }),
        ],
        { type: "application/json" }
      );

      for (const file of inputs.carwashImage) {
        formData.append("images", file);
      }
      formData.append("updateData", blob);

      return putCarwashesDetails(carwash_id, formData);
    },
    onSuccess: () => {
      alert("정상적으로 수정되었습니다.");
      queryClient.refetchQueries(["carwashItem"]);
      navigate(`/manage/item/${carwash_id}`);
    },
    onError: (error) => {
      alert(`수정에 실패하였습니다. ${error.message}`);
    },
  });

  const carwashDetail = data.data.response;

  const imageFileList = carwashDetail.imageFileList.map((item) => {
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
    <div className="flex gap-8">
      <Box className="grid gap-8 p-14">
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
