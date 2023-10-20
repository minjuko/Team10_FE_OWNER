export const carwashes = {
  success: true,
  response: {
    carwash: [
      {
        id: "1",
        image:
          "https://github.com/Step3-kakao-tech-campus/Team10_FE_OWNER/assets/104883910/b214edfd-a3b7-4eb0-aaef-9dd4705ca24e",
        name: "포세이돈워시 용봉점",
        optime: {
          // 운영시간
          weekday: {
            // 평일
            start: "09:00:00",
            end: "17:00:00",
          },
          weekend: {
            // 주말
            start: "10:00:00",
            end: "16:00:00",
          },
        },
        bays: [
          {
            bay_no: "1",
            bay_bookedTime: [
              {
                start_time: "2023-10-20T10:00",
                end_time: "2023-10-20T12:00",
              },
              {
                start_time: "2023-10-20T16:00",
                end_time: "2023-10-20T18:00",
              },
            ],
          },
        ],
      },
    ],
  },
  error: null,
};
