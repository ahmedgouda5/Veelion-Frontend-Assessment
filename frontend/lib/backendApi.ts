import { BACKEND_BASE_URL } from "@/lib/constants";
import { requestJson } from "@/lib/request";
import type {
  ActivityLog,
  Task,
  TaskResponse,
  TasksResponse,
  TasksSummary,
} from "@/types/api";

function buildBackendUrl(path: string): string {
  return `${BACKEND_BASE_URL}${path}`;
}

export async function getTasksFromBackend(): Promise<Task[]> {
  const body = await requestJson<TasksResponse>(buildBackendUrl("/tasks"), {
    method: "GET",
  });
  return body.data;
}

export async function updateTaskInBackend(
  taskId: string,
  completed: boolean
): Promise<Task> {
  const body = await requestJson<TaskResponse>(
    buildBackendUrl(`/tasks/${taskId}`),
    {
      method: "PATCH",
      body: JSON.stringify({ completed }),
    }
  );
  return body.data;
}

export async function getActivityFromBackend(): Promise<ActivityLog[]> {
  return requestJson<ActivityLog[]>(buildBackendUrl("/activity"), {
    method: "GET",
  });
}

export async function getReportsSummaryFromBackend(): Promise<TasksSummary> {
  return requestJson<TasksSummary>(buildBackendUrl("/reports/tasks-summary"), {
    method: "GET",
  });
}
