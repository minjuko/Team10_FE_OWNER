import { useDispatch } from "react-redux";
import GNB from "../components/atoms/GNB";
import { Outlet, useNavigate } from "react-router-dom";
import { getUserInfoThunk } from "../store/slices/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

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
        <ErrorBoundary fallback={<div>Error occurred!</div>}>
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  );
};

export default MainLayout;
