import type { ActivityLog } from "@/types/api";

export function filterActivity(
  items: ActivityLog[],
  query: string
): ActivityLog[] {
  const text = query.trim().toLowerCase();

  if (!text) {
    return items;
  }

  return items.filter(
    (item) =>
      (item.action || "").toLowerCase().includes(text) ||
      (item.info || "").toLowerCase().includes(text)
  );
}

export function formatTime(value: string): string {
  return new Date(value).toLocaleString();
}
