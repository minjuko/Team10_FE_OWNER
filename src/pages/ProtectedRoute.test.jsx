import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import ProtectedRoute from "./ProtectedRoute";

const renderRoute = () =>
  render(
    <MemoryRouter initialEntries={["/private"]}>
      <Routes>
        <Route path="/login" element={<div>로그인 화면</div>} />
        <Route
          path="/private"
          element={
            <ProtectedRoute>
              <div>보호된 화면</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </MemoryRouter>,
  );

describe("ProtectedRoute", () => {
  test("redirects an unauthenticated user to login", () => {
    renderRoute();
    expect(screen.getByText("로그인 화면")).toBeInTheDocument();
  });

  test("renders children for an authenticated user", () => {
    localStorage.setItem("Token", "test-token");
    renderRoute();
    expect(screen.getByText("보호된 화면")).toBeInTheDocument();
  });
});
