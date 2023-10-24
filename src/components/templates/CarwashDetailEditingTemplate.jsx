import RegisterForm from "../organisms/RegisterForm";
import Box from "../atoms/Box";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { getCarwashesDetails, putCarwashesDetails } from "../../apis/carwashes";

const CarwashDetailEditingTemplate = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["getCarwashDetail"],
    queryFn: getCarwashesDetails,
  });

  const mutation = useMutation({
    mutationFn: (data) => {
      putCarwashesDetails(data);
    },
  });

  const carwashDetail = data.data.response;

  return (
    <div className="flex">
      <Box className="grid gap-8 p-14">
        <div className="text-2xl font-bold">세차장 정보 수정</div>
        <RegisterForm
          carwashName={carwashDetail.name}
          carwashAddress={carwashDetail.location.address}
          carwashTel={carwashDetail.tel}
          pricePer30min={carwashDetail.price}
          carwashDescription={carwashDetail.optime.des}
          mutation={mutation}
        />
      </Box>
    </div>
  );
};

export default CarwashDetailEditingTemplate;
