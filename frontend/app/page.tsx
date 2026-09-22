import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="stack" style={{ marginBottom: "var(--space-5)" }}>
        <h1 style={{ margin: 0 }}>VeeLion Frontend Assessment</h1>
        <p style={{ margin: 0, color: "var(--muted)" }}>
          Two separate modules built against the provided backend.
        </p>
      </header>

      <section className="nav-grid">
        <Link href="/tasks" className="card nav-card">
          <h2 style={{ marginTop: 0 }}>Task Dashboard</h2>
          <p style={{ margin: "0 0 var(--space-3)" }}>
            View, filter, and toggle the completion status of tasks.
          </p>
          <span className="nav-card__hint">Open module →</span>
        </Link>

        <Link href="/activity" className="card nav-card">
          <h2 style={{ marginTop: 0 }}>Activity Feed</h2>
          <p style={{ margin: "0 0 var(--space-3)" }}>
            Review recent actions logged by the system.
          </p>
          <span className="nav-card__hint">Open module →</span>
        </Link>

        <Link href="/reports" className="card nav-card">
          <h2 style={{ marginTop: 0 }}>Reports</h2>
          <p style={{ margin: "0 0 var(--space-3)" }}>
            View totals and task counts grouped by status.
          </p>
          <span className="nav-card__hint">Open module →</span>
        </Link>
      </section>
    </main>
  );
}
