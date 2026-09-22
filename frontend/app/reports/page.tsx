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
        <span className="overline" style={{ marginBottom: "var(--space-2)" }}>
          Module · 03
        </span>
        <h1 style={{ marginBottom: "var(--space-2)" }}>Reports</h1>
        <p className="lead">Task and activity summary statistics.</p>
      </section>

      <section className="stat-grid">
        <div className="card card--padded">
          <div className="stat-block">
            <span className="stat-label">Total tasks</span>
            <span className="stat-value">{summary.total}</span>
          </div>
        </div>

        <div className="card card--padded">
          <div className="stat-block">
            <span className="stat-label">Recent activity</span>
            <span className="stat-value">{summary.recentActivityCount}</span>
          </div>
        </div>
      </section>

      <section
        className="card card--padded"
        aria-label="Tasks grouped by status"
      >
        <h2 style={{ marginTop: 0, marginBottom: "var(--space-4)" }}>
          Tasks by status
        </h2>
        <ul className="status-list">
          {STATUS_ENTRIES.map(({ key, label }) => (
            <li key={key} className="status-item">
              <span>{label}</span>
              <span className="badge">{summary.byStatus[key]}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
