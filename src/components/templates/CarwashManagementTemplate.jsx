import { useSuspenseQuery } from "@tanstack/react-query";
import CarwashItem from "../organisms/CarwashItem";
import { getCarwashes } from "../../apis/carwashes";
import { isEmpty } from "../../utils/isEmpty";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const CarwashManagementTemplate = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["carwash"],
    queryFn: getCarwashes,
  });
  const carwashList = data.data.response.carwashList;

  const navigate = useNavigate();

  return (
    <div className="grid gap-4">
      {isEmpty(carwashList) ? (
        <div className="flex flex-col items-center justify-center w-auto gap-8">
          <div className="text-xl">
            등록된 세차장이 없습니다. 먼저 입점신청 후 접속해주세요.
          </div>
          <Button
            variant="long"
            onClick={() => {
              navigate("/register");
            }}>
            입점신청
          </Button>
        </div>
      ) : (
        carwashList.map((item) => (
          <CarwashItem
            key={item.id}
            carwashId={item.id}
            name={item.name}
            optime={item.optime}
            bayReservationList={item.bayReservationList}
            imageList={item.imageList}
          />
        ))
      )}
    </div>
  );
};

export default CarwashManagementTemplate;
