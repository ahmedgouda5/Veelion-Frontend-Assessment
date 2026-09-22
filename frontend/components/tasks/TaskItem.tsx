import type { Task } from "@/types/api";

type TaskItemProps = {
  task: Task;
  busy: boolean;
  onToggle: (task: Task) => void;
};

export function TaskItem({ task, busy, onToggle }: TaskItemProps) {
  const completed = task.completed;

  return (
    <li className={`card task-item${completed ? " task-item--completed" : ""}`}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          alignItems: "start",
        }}
      >
        <p className="task-item__title" style={{ margin: 0, fontWeight: 600 }}>
          {task.title}
        </p>
        <span
          className={`badge${completed ? " badge--completed" : " badge--pending"}`}
        >
          {completed ? "Completed" : "Pending"}
        </span>
      </div>

      <small style={{ color: "var(--muted)" }}>
        Updated: {new Date(task.updatedAt).toLocaleString()}
      </small>

      <div>
        <button
          type="button"
          className="button"
          onClick={() => onToggle(task)}
          disabled={busy}
          aria-label={`Mark ${task.title} as ${completed ? "pending" : "completed"}`}
        >
          {busy
            ? "Saving..."
            : completed
              ? "Mark as Pending"
              : "Mark as Completed"}
        </button>
      </div>
    </li>
  );
}
