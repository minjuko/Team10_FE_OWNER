import test from "node:test";
import assert from "node:assert/strict";
import { getOperatingTimeRange } from "./operatingTime.js";

test("converts overnight hours to the following day", () => {
  assert.deepEqual(getOperatingTimeRange("22:00", "02:00"), {
    startHour: 22,
    startMinute: 0,
    endHour: 26,
    endMinute: 0,
  });
});

test("keeps a midnight opening with a later closing time", () => {
  assert.deepEqual(getOperatingTimeRange("00:00", "06:00"), {
    startHour: 0,
    startMinute: 0,
    endHour: 6,
    endMinute: 0,
  });
});

test("treats matching opening and closing times as 24 hours", () => {
  assert.deepEqual(getOperatingTimeRange("00:00", "00:00"), {
    startHour: 0,
    startMinute: 0,
    endHour: 24,
    endMinute: 0,
  });
});
