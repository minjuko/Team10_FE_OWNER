import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import RegisterForm from "./RegisterForm";

vi.mock("../molecules/DaumPostcodePicker", () => ({
  default: () => <div>주소 선택</div>,
}));
vi.mock("../molecules/ImageUploader", () => ({
  default: () => <div>이미지 선택</div>,
}));
vi.mock("../molecules/KeyPointSelector", () => ({
  default: () => <div>키포인트 선택</div>,
}));
vi.mock("../molecules/OpTimePicker", () => ({
  default: () => <div>영업시간 선택</div>,
}));

const validInputs = {
  carwashName: "테스트 세차장",
  carwashAddress: "서울시 테스트로 1",
  latitude: "37.5",
  longitude: "127.0",
  carwashTel: "02-1234-5678",
  pricePer30min: "5000",
  weekdayOpenTime: "09:00",
  weekdayCloseTime: "18:00",
  weekendOpenTime: "09:00",
  weekendCloseTime: "18:00",
  keypoint: [1],
  carwashImage: [],
  carwashDescription: "테스트 설명",
};

const renderForm = (inputs) =>
  render(
    <RegisterForm
      inputs={inputs}
      onChange={vi.fn()}
      mutation={{ mutate: vi.fn() }}
      isDirty
      buttonLabel="저장"
      requireImage={false}
    />,
  );

describe("RegisterForm", () => {
  test("disables submission when a required value is missing", () => {
    renderForm({ ...validInputs, carwashName: "" });
    expect(screen.getByRole("button", { name: "저장" })).toBeDisabled();
    expect(screen.getByText("필수 항목이 입력되지 않았습니다.")).toBeVisible();
  });

  test("rejects a non-positive price", () => {
    renderForm({ ...validInputs, pricePer30min: "0" });
    expect(screen.getByRole("button", { name: "저장" })).toBeDisabled();
    expect(
      screen.getByText("30분당 금액은 1 이상의 숫자로 입력해 주세요."),
    ).toBeVisible();
  });

  test("renders safely when the Kakao SDK is not loaded", () => {
    delete window.kakao;
    expect(() => renderForm(validInputs)).not.toThrow();
    expect(screen.getByRole("button", { name: "저장" })).toBeEnabled();
  });
});
