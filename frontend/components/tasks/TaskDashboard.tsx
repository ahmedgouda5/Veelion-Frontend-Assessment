"use client";

import { useTasks } from "@/hooks/useTasks";
import type { Task } from "@/types/api";
import { StatusFilter } from "@/components/tasks/StatusFilter";
import { TaskList } from "@/components/tasks/TaskList";

export function TaskDashboard() {
  const {
    filteredTasks,
    filter,
    loading,
    error,
    updatingTaskId,
    setFilter,
    reload,
    updateTaskStatus,
  } = useTasks();

  const handleToggle = (task: Task) => {
    updateTaskStatus(task.id, !task.completed);
  };

  return (
    <section className="stack">
      <header className="card card--padded">
        <h1 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
          Task Dashboard
        </h1>
      </header>

      <StatusFilter value={filter} onChange={setFilter} disabled={loading} />

      {loading ? (
        <section className="card card--padded">
          <p style={{ margin: 0 }}>Loading tasks...</p>
        </section>
      ) : null}

      {error ? (
        <section className="card card--padded card--error">
          <p
            style={{
              marginTop: 0,
              marginBottom: "var(--space-3)",
              color: "var(--danger)",
            }}
          >
            {error}
          </p>
          <button type="button" className="button" onClick={reload}>
            Retry
          </button>
        </section>
      ) : null}

      {!loading && !error ? (
        <TaskList
          tasks={filteredTasks}
          updatingTaskId={updatingTaskId}
          onToggle={handleToggle}
        />
      ) : null}
    </section>
  );
}
