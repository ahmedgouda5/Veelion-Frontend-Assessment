import { useCallback, useEffect, useMemo, useState } from "react";
import { requestJson } from "@/lib/request";
import type {
  Task,
  TaskFilter,
  TaskResponse,
  TasksResponse,
} from "@/types/api";

function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof Error) return error.message;
  return fallback;
}

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updatingTaskId, setUpdatingTaskId] = useState<string | null>(null);

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const body = await requestJson<TasksResponse>("/api/tasks", {
        method: "GET",
      });

      setTasks(body.data);
    } catch (error) {
      setError(getErrorMessage(error, "Could not load tasks right now."));
    } finally {
      setLoading(false);
    }
  }, []);

  const updateTaskStatus = useCallback(
    async (taskId: string, completed: boolean) => {
      try {
        setUpdatingTaskId(taskId);
        setError("");

        const body = await requestJson<TaskResponse>(`/api/tasks/${taskId}`, {
          method: "PATCH",
          body: JSON.stringify({ completed }),
        });

        setTasks((previous) =>
          previous.map((task) => (task.id === taskId ? body.data : task))
        );
      } catch (error) {
        setError(getErrorMessage(error, "Could not update task status."));
      } finally {
        setUpdatingTaskId(null);
      }
    },
    []
  );

  useEffect(() => {
    reload();
  }, [reload]);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter((task) => task.completed);
    if (filter === "pending") return tasks.filter((task) => !task.completed);
    return tasks;
  }, [tasks, filter]);

  return {
    filteredTasks,
    filter,
    loading,
    error,
    updatingTaskId,
    setFilter,
    reload,
    updateTaskStatus,
  };
}
