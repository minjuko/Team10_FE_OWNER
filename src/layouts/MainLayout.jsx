import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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
