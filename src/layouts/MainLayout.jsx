import { useDispatch } from "react-redux";
import GNB from "../components/atoms/GNB";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfoThunk } from "../store/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import GlobalErrorBoundaryWrapper from "../components/atoms/GlobalErrorBoundaryWrapper";

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoThunk())
      .then(unwrapResult)
      .catch(() => {
        navigate("/login");
      });
  }, []);

  return (
    <>
      <GNB />
      <main className="w-[1280px] mx-auto p-4 my-24">
        <GlobalErrorBoundaryWrapper>
          <Outlet />
        </GlobalErrorBoundaryWrapper>
      </main>
    </>
  );
};

export default MainLayout;
