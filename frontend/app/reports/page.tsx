import Link from "next/link";
import type { Metadata } from "next";
import { getReportsSummaryFromBackend } from "@/lib/backendApi";
import type { TasksSummary } from "@/types/api";

export const metadata: Metadata = {
  title: "Reports | VeeLion",
  description: "Task and activity summary statistics",
};

const STATUS_ENTRIES: Array<{
  key: keyof TasksSummary["byStatus"];
  label: string;
}> = [
  { key: "todo", label: "To do" },
  { key: "in-progress", label: "In progress" },
  { key: "done", label: "Done" },
];

export default async function ReportsPage() {
  const summary = await getReportsSummaryFromBackend();

  return (
    <main className="stack">
      <nav>
        <Link href="/" className="button">
          Back
        </Link>
      </nav>

      <section className="card card--padded">
        <h1 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
          Reports
        </h1>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          Task and activity summary statistics.
        </p>
      </section>

      <section className="stat-grid">
        <div className="card card--padded">
          <small style={{ color: "var(--muted)" }}>Total tasks</small>
          <p className="stat-value">{summary.total}</p>
        </div>

        <div className="card card--padded">
          <small style={{ color: "var(--muted)" }}>Recent activity</small>
          <p className="stat-value">{summary.recentActivityCount}</p>
        </div>
      </section>

      <section
        className="card card--padded"
        aria-label="Tasks grouped by status"
      >
        <h2 style={{ marginTop: 0, marginBottom: "var(--space-3)" }}>
          Tasks by status
        </h2>
        <ul className="status-list">
          {STATUS_ENTRIES.map(({ key, label }) => (
            <li key={key} className="status-item card--padded">
              <span>{label}</span>
              <span className="badge">{summary.byStatus[key]}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
