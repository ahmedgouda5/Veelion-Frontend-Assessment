import type { TaskFilter } from "@/types/api";

const FILTERS: Array<{ label: string; value: TaskFilter }> = [
  { label: "All", value: "all" },
  { label: "Completed", value: "completed" },
  { label: "Pending", value: "pending" },
];

type StatusFilterProps = {
  value: TaskFilter;
  onChange: (value: TaskFilter) => void;
  disabled?: boolean;
};

export function StatusFilter({ value, onChange, disabled }: StatusFilterProps) {
  return (
    <section aria-label="Filter tasks by status" className="card card--compact">
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {FILTERS.map((filter) => {
          const active = filter.value === value;

          return (
            <button
              key={filter.value}
              type="button"
              className={active ? "button primary" : "button"}
              onClick={() => onChange(filter.value)}
              aria-pressed={active}
              disabled={disabled}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}
