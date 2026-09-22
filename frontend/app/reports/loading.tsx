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
        <h1 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
          Reports
        </h1>
        <p style={{ margin: 0 }}>Loading report summary...</p>
      </section>

      <div className="stat-grid">
        <div className="card card--padded">
          <small style={{ color: "var(--muted)" }}>Total tasks</small>
          <p className="stat-value">—</p>
        </div>
        <div className="card card--padded">
          <small style={{ color: "var(--muted)" }}>Recent activity</small>
          <p className="stat-value">—</p>
        </div>
      </div>
    </main>
  );
}
