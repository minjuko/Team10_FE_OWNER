import { Link } from "react-router-dom";

const CarwashItem = ({ carwash }) => {
  return (
    <Link to="/manage/item" className="flex overflow-auto shadow-xl rounded-xl">
      <img className="w-48 h-48" src={carwash.image} alt={carwash.name} />
      <div className="flex-grow">
        <div className="p-4 text-2xl font-bold text-white bg-primary">
          {carwash.name}
        </div>
        <div className="p-4">
          {carwash.bay_list.map((item) => {
            return (
              <div key={item.bay_no} className="flex gap-4">
                <div>{item.bay_no}</div>
                {item.bay_bookedTime.map((item, index) => (
                  <div key={index}>
                    {item.start_time}~{item.end_time}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

export default CarwashItem;
