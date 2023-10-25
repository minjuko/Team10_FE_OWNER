import RegisterForm from "../organisms/RegisterForm";
import Box from "../atoms/Box";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { getCarwashesDetails, putCarwashesDetails } from "../../apis/carwashes";
import MobilePreview from "../organisms/MobilePreview";
import useRegisterForm from "../../hooks/useRegisterForm";
import { useEffect } from "react";

const CarwashDetailEditingTemplate = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashDetail"],
    queryFn: getCarwashesDetails,
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

  const mutation = useMutation({
    mutationFn: (data) => {
      putCarwashesDetails(data);
    },
  });

  useEffect(() => {
    console.log("inputs", inputs);
  }, [inputs]);

  return (
    <div className="flex gap-8">
      <Box className="grid gap-8 p-14">
        <div className="text-2xl font-bold">세차장 정보 수정</div>
        <RegisterForm
          inputs={inputs}
          onChange={handleChange}
          mutation={mutation}
        />
      </Box>
      <MobilePreview inputs={inputs} />
    </div>
  );
};

export default CarwashDetailEditingTemplate;
