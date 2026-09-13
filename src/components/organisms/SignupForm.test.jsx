import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { checkUniqueEmail, signup } from "../../apis/user";
import SignupForm from "./SignupForm";

vi.mock("../../apis/user", () => ({
  checkUniqueEmail: vi.fn(),
  signup: vi.fn(),
}));

const renderForm = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false }, mutations: { retry: false } },
  });

  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <SignupForm />
      </MemoryRouter>
    </QueryClientProvider>,
  );
};

const fillValidForm = async (user) => {
  await user.type(screen.getByPlaceholderText("이메일"), "owner@example.com");
  await user.type(screen.getByPlaceholderText("이름"), "세차장주인");
  await user.type(screen.getByPlaceholderText("비밀번호"), "Password1!");
  await user.type(screen.getByPlaceholderText("비밀번호 확인"), "Password1!");
  await user.type(screen.getByPlaceholderText("전화번호"), "01012345678");
};

describe("SignupForm", () => {
  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  test("blocks submission until the email has been checked", async () => {
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);

    await user.click(screen.getByRole("button", { name: "회원가입" }));

    expect(signup).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("이메일 중복체크를 해주세요.");
  });

  test("does not report success until the signup promise resolves", async () => {
    let resolveSignup;
    signup.mockReturnValue(
      new Promise((resolve) => {
        resolveSignup = resolve;
      }),
    );
    checkUniqueEmail.mockResolvedValue({ data: { success: true } });
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "중복체크" }));
    await user.click(screen.getByRole("button", { name: "회원가입" }));

    expect(signup).toHaveBeenCalledTimes(1);
    expect(window.alert).not.toHaveBeenCalledWith(
      "회원가입이 완료되었습니다. 로그인해주세요.",
    );

    resolveSignup({ data: { success: true } });
    await waitFor(() =>
      expect(window.alert).toHaveBeenCalledWith(
        "회원가입이 완료되었습니다. 로그인해주세요.",
      ),
    );
  });

  test("shows a safe fallback when the signup request fails without a response", async () => {
    signup.mockRejectedValue(new Error("Network Error"));
    checkUniqueEmail.mockResolvedValue({ data: { success: true } });
    const user = userEvent.setup();
    renderForm();
    await fillValidForm(user);
    await user.click(screen.getByRole("button", { name: "중복체크" }));
    await user.click(screen.getByRole("button", { name: "회원가입" }));

    expect(
      await screen.findByText(
        "요청을 처리하지 못했습니다. 잠시 후 다시 시도해 주세요.",
      ),
    ).toBeInTheDocument();
  });
});
