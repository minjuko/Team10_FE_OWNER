import CarwashItem from "../organisms/CarwashItem";
import CarwashImage from "/carwashImage.png";

// 매장관리 API 수정

const CarwashManagementTemplate = ({
  response = [
    {
      image: CarwashImage,
      name: "용봉세차타운",
      start_time: "2023-10-17T00:00",
      end_time: "2023-10-17T23:59",
      bay_list: [
        {
          bay_no: 8,
          bay_bookedTime: [
            // 전날 오후 11시 ~ 오늘 오전 2시
            {
              start_time: "2023-10-15T23:00:00",
              end_time: "2023-10-17T02:00:00",
            },
            {
              start_time: "2023-10-17T07:00:00",
              end_time: "2023-10-17T09:00:00",
            },
            {
              start_time: "2023-10-17T04:00:00",
              end_time: "2023-10-17T06:00:00",
            },
            {
              start_time: "2023-10-17T20:00:00",
              end_time: "2023-10-17T21:00:00",
            },
            {
              start_time: "2023-10-17T19:00:00",
              end_time: "2023-10-17T20:00:00",
            },
            // 오늘 오후 11시 ~ 다음날 오전 1시 30분
            {
              start_time: "2023-10-17T23:00:00",
              end_time: "2023-10-18T01:30:00",
            },
          ],
        },
        {
          bay_no: 9,
          bay_bookedTime: [
            {
              start_time: "2023-10-17T05:00:00",
              end_time: "2023-10-17T08:00:00",
            },
            {
              start_time: "2023-10-17T12:00:00",
              end_time: "2023-10-17T13:30:00",
            },
          ],
        },
        {
          bay_no: 10,
          bay_bookedTime: [
            {
              start_time: "2023-10-17T01:00",
              end_time: "2023-10-17T02:30",
            },
            {
              start_time: "2023-10-17T05:30",
              end_time: "2023-10-17T06:30",
            },
          ],
        },
      ],
    },
    {
      image: CarwashImage,
      name: "수완세차타운",
      start_time: "2023-10-17T07:00",
      end_time: "2023-10-17T22:00",
      bay_list: [
        {
          bay_no: 4,
          bay_bookedTime: [
            {
              start_time: "2023-10-17T07:00",
              end_time: "2023-10-17T11:00",
            },
            {
              start_time: "2023-10-17T15:00",
              end_time: "2023-10-17T18:00",
            },
          ],
        },
        {
          bay_no: 5,
          bay_bookedTime: [
            {
              start_time: "2023-10-17T12:00",
              end_time: "2023-10-17T14:00",
            },
            {
              start_time: "2023-10-17T18:00",
              end_time: "2023-10-17T21:00",
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
