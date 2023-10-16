import Toggle from "../atoms/Toggle";

const CarwashBayItem = ({ bay }) => {
  return (
    <div className="p-4 shadow-xl rounded-xl">
      <div className="flex justify-between">
        <div className="text-xl font-semibold">베이 {bay.bay_no}</div>
        <div className="flex gap-4">
          <Toggle />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="box-content w-12 text-gray-500 border-2 border-gray-500 rounded-full ">
            삭제
          </button>
        </div>
      </div>
      <div>
        {bay.bay_bookedTime.map((item, index) => {
          return (
            <div key={index}>
              {item.start_time}~{item.end_time}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarwashBayItem;
