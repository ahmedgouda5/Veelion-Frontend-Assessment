import Link from "next/link";

export default function ReportsLoading() {
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
        <p className="empty">Loading report summary...</p>
      </section>

      <div className="stat-grid">
        <div className="card card--padded">
          <div className="stat-block">
            <span className="stat-label">Total tasks</span>
            <span className="stat-value">—</span>
          </div>
        </div>
        <div className="card card--padded">
          <div className="stat-block">
            <span className="stat-label">Recent activity</span>
            <span className="stat-value">—</span>
          </div>
        </div>
      </div>
    </main>
  );
}
