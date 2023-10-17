const MultipleTimeTable = ({ carwash }) => {
  const startTime = new Date(carwash.start_time);
  const endTime = new Date(carwash.end_time);

  let startHour = startTime.getHours();
  let startMinute = startTime.getMinutes();
  let endHour;
  let endMinute;

  // 24시간 운영할 때: endHour와 endMinute을 24시 0분으로 설정
  if (endTime.getHours() === 23 && endTime.getMinutes() === 59) {
    endHour = 24;
    endMinute = 0;
  }
  // 운영시간이 하루를 넘어가는 경우: endHour에 24를 더해서 설정
  else if (endTime.getDate() > startTime.getDate()) {
    endHour = endTime.getHours() + 24;
    endMinute = endTime.getMinutes();
  }
  // 운영시간이 하루를 넘어가지 않는 경우: endHour와 endMinute을 그대로 설정
  else {
    endHour = endTime.getHours();
    endMinute = endTime.getMinutes();
  }

  const isTimeSlotBooked = (hour, minute, bookedTime) => {
    const slotStartTime = new Date(carwash.start_time);
    slotStartTime.setHours(hour, minute);
    const slotEndTime = new Date(slotStartTime);
    slotEndTime.setMinutes(slotStartTime.getMinutes() + 30);

    return bookedTime.some(
      (booking) =>
        new Date(booking.start_time) <= slotStartTime &&
        new Date(booking.end_time) >= slotEndTime
    );
  };

  const hourLoop = (startHour, endHour) => {
    const result = [];
    let colSpan;
    result.push(<th key="empty" className="border border-gray-500"></th>);

    if (startMinute === 30) colSpan = 1;
    else colSpan = 2;

    result.push(
      <th key={startHour} colSpan={colSpan} className="border border-gray-500">
        {startHour}
      </th>
    );

    for (let i = startHour + 1; i < endHour; i++) {
      result.push(
        <th key={i} colSpan="2" className="border border-gray-500">
          {i}
        </th>
      );
    }

    if (endMinute === 30) {
      result.push(
        <th key={endHour} colSpan="1" className="border border-gray-500">
          {endHour}
        </th>
      );
    }

    return result;
  };

  const minuteLoop = (startMinute, endMinute, bookedTime, bay_no) => {
    const result = [];
    let currentHour = startHour;
    let currentMinute = startMinute;

    result.push(
      <td
        key={`베이 ${bay_no}`}
        className={`w-16 h-6 border border-gray-500 text-center
        }`}>
        베이 {bay_no}
      </td>
    );
    while (
      currentHour < endHour ||
      (currentHour === endHour && currentMinute < endMinute)
    ) {
      const isBooked = isTimeSlotBooked(currentHour, currentMinute, bookedTime);

      result.push(
        <td
          key={`${currentHour}-${currentMinute}`}
          className={`w-5 h-8 border border-gray-500 ${
            isBooked ? "bg-primary hover:bg-sky-300" : ""
          }`}></td>
      );

      if (currentMinute === 30) {
        currentHour++;
        currentMinute = 0;
      } else {
        currentMinute = 30;
      }
    }

    return result;
  };

  return (
    <table>
      <thead>
        <tr className="bg-gray-300">{hourLoop(startHour, endHour)}</tr>
      </thead>
      <tbody>
        {carwash.bay_list.map((item) => {
          return (
            <tr key={item.bay_no}>
              {minuteLoop(
                startMinute,
                endMinute,
                item.bay_bookedTime,
                item.bay_no
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MultipleTimeTable;
