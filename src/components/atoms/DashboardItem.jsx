import Image from "./Image";

const DashboardItem = ({ label, number, percentage, unit, icon }) => {
  return (
    <div className="items-center p-4 bg-white shadow-xl flex-between w-96 rounded-xl">
      <div>
        <div>{label}</div>
        <div className="text-3xl font-bold">
          {number.toLocaleString()}
          {unit}
        </div>
        <div className="font-semibold">
          지난 달 대비 {percentage.toFixed() >= 0 ? "+" : ""}
          {percentage.toFixed() + "%"}
        </div>
      </div>
      <Image src={icon} alt={label} />
    </div>
  );
};

export default DashboardItem;
