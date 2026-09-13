import { describe, expect, test } from "vitest";
import { getOperatingTimeRange } from "./operatingTime.js";

describe("getOperatingTimeRange", () => {
  test("converts overnight hours to the following day", () => {
    expect(getOperatingTimeRange("22:00", "02:00")).toEqual({
      startHour: 22,
      startMinute: 0,
      endHour: 26,
      endMinute: 0,
    });
  });

  test("keeps a midnight opening with a later closing time", () => {
    expect(getOperatingTimeRange("00:00", "06:00")).toEqual({
      startHour: 0,
      startMinute: 0,
      endHour: 6,
      endMinute: 0,
    });
  });

  test("treats matching opening and closing times as 24 hours", () => {
    expect(getOperatingTimeRange("00:00", "00:00")).toEqual({
      startHour: 0,
      startMinute: 0,
      endHour: 24,
      endMinute: 0,
    });
  });
});
