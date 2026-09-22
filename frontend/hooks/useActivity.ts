import { useCallback, useEffect, useMemo, useState } from "react";
import { filterActivity } from "@/lib/activity";
import { requestJson } from "@/lib/request";
import type { ActivityLog, ActivityResponse } from "@/types/api";

function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error) return error.message;
  return fallback;
}

export function useActivity(initialData: ActivityLog[] | null) {
  const [allActivity, setAllActivity] = useState<ActivityLog[]>(
    initialData ?? []
  );
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(initialData === null);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const body = await requestJson<ActivityResponse>("/api/activity", {
        method: "GET",
      });

      setAllActivity(body.data);
    } catch (error) {
      setError(getErrorMessage(error, "Could not load activity right now."));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (initialData !== null) return;
    reload();
  }, [initialData, reload]);

  const shownActivity = useMemo(
    () => filterActivity(allActivity, query),
    [allActivity, query]
  );

  return {
    shownActivity,
    total: allActivity.length,
    query,
    setQuery,
    loading,
    error,
    reload,
  };
}
