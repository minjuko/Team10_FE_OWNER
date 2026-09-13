import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useRegisterForm from "./useRegisterForm";

describe("useRegisterForm", () => {
  const initialValue = { name: "원래 이름", tel: "01012345678" };

  test("marks the first changed value as dirty while preserving other fields", () => {
    const { result } = renderHook(() => useRegisterForm(initialValue));

    act(() => result.current.handleChange("name", "새 이름"));

    expect(result.current.isDirty).toBe(true);
    expect(result.current.inputs).toEqual({
      name: "새 이름",
      tel: "01012345678",
    });
  });

  test("becomes clean again when every field is restored", () => {
    const { result } = renderHook(() => useRegisterForm(initialValue));

    act(() => result.current.handleChange("name", "새 이름"));
    act(() => result.current.handleChange("name", "원래 이름"));

    expect(result.current.isDirty).toBe(false);
  });
});
