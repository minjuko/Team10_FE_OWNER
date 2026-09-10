export const getOperatingTimeRange = (startTime, endTime) => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  let [endHour, endMinute] = endTime.split(":").map(Number);
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;

  if (startMinutes === endMinutes) {
    endHour = 24;
    endMinute = 0;
  } else if (endMinutes < startMinutes) {
    endHour += 24;
  }

  return { startHour, startMinute, endHour, endMinute };
};
