import { describe, expect, it } from "vitest";
import { filterActivity, formatTime } from "@/lib/activity";
import type { ActivityLog } from "@/types/api";

const logs: ActivityLog[] = [
  {
    id: "1",
    action: "Task created",
    info: "Write report",
    when: "2026-09-22T10:00:00Z",
  },
  {
    id: "2",
    action: "Task updated",
    info: "Write code",
    when: "2026-09-22T11:00:00Z",
  },
  { id: "3", action: "Task deleted", when: "2026-09-22T12:00:00Z" },
];

describe("filterActivity", () => {
  it("returns all items for an empty query", () => {
    expect(filterActivity(logs, "")).toEqual(logs);
    expect(filterActivity(logs, "   ")).toEqual(logs);
  });

  it("matches on action", () => {
    expect(filterActivity(logs, "created")).toEqual([logs[0]]);
  });

  it("matches on info and ignores case", () => {
    expect(filterActivity(logs, "CODE")).toEqual([logs[1]]);
  });

  it("returns an empty array when nothing matches", () => {
    expect(filterActivity(logs, "zebra")).toEqual([]);
  });

  it("does not mutate the input array", () => {
    const original = [...logs];
    filterActivity(logs, "task");
    expect(logs).toEqual(original);
  });
});

describe("formatTime", () => {
  it("formats an ISO timestamp into a locale string", () => {
    const value = new Date("2026-09-22T10:00:00Z");
    expect(formatTime("2026-09-22T10:00:00Z")).toBe(value.toLocaleString());
  });
});
