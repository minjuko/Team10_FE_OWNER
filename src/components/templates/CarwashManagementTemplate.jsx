import Card from "../molecules/Card";
import CarwashItem from "../organisms/CarwashItem";
import CarwashImage from "/carwashImage.png";

// 매장관리 API 수정

const CarwashManagementTemplate = ({
  response = [
    {
      image: CarwashImage,
      name: "용봉세차타운",
      bay_list: [
        {
          bay_no: 8,
          bay_bookedTime: [
            {
              start_time: "2021-09-01 19:00:00",
              end_time: "2021-09-01 20:00:00",
            },
            {
              start_time: "2021-09-01 20:00:00",
              end_time: "2021-09-01 21:00:00",
            },
          ],
        },
        {
          bay_no: 9,
          bay_bookedTime: [
            {
              start_time: "2021-09-01 19:00:00",
              end_time: "2021-09-01 20:00:00",
            },
            {
              start_time: "2021-09-01 20:00:00",
              end_time: "2021-09-01 21:00:00",
            },
          ],
        },
      ],
    },
    {
      image: CarwashImage,
      name: "수완세차타운",
      bay_list: [
        {
          bay_no: 4,
          bay_bookedTime: [
            {
              start_time: "2021-09-01 19:00:00",
              end_time: "2021-09-01 20:00:00",
            },
            {
              start_time: "2021-09-01 20:00:00",
              end_time: "2021-09-01 21:00:00",
            },
          ],
        },
        {
          bay_no: 5,
          bay_bookedTime: [
            {
              start_time: "2021-09-01 19:00:00",
              end_time: "2021-09-01 20:00:00",
            },
            {
              start_time: "2021-09-01 20:00:00",
              end_time: "2021-09-01 21:00:00",
            },
          ],
        },
      ],
    },
  ],
}) => {
  return (
    <div className="grid gap-4">
      {response.map((item) => (
        <CarwashItem key={item.name} carwash={item} />
      ))}
    </div>
  );
};

export default CarwashManagementTemplate;
