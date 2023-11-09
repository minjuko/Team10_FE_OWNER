import GNB from "../components/atoms/GNB";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <GNB />
      <main className="w-[1280px] mx-auto p-4 my-24">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
