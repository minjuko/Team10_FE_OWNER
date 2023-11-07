import { Outlet, useNavigate } from "react-router-dom";
import GNB from "../components/atoms/GNB";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <GNB />
      <main className="w-[1280px] mx-auto p-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
