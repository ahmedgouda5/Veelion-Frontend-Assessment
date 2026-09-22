import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <header className="card hero card--padded">
        <span className="overline">VeeLion · Frontend Assessment</span>
        <h1>VeeLion Frontend Assessment</h1>
        <p className="lead">
          Two separate modules built against the provided backend.
        </p>
      </header>

      <section className="nav-grid" style={{ marginTop: "var(--space-6)" }}>
        <Link href="/tasks" className="card nav-card">
          <span className="nav-index">01</span>
          <h2>Task Dashboard</h2>
          <p>View, filter, and toggle the completion status of tasks.</p>
          <span className="nav-card__hint">Open module →</span>
        </Link>

        <Link href="/activity" className="card nav-card">
          <span className="nav-index">02</span>
          <h2>Activity Feed</h2>
          <p>Review recent actions logged by the system.</p>
          <span className="nav-card__hint">Open module →</span>
        </Link>

        <Link href="/reports" className="card nav-card">
          <span className="nav-index">03</span>
          <h2>Reports</h2>
          <p>View totals and task counts grouped by status.</p>
          <span className="nav-card__hint">Open module →</span>
        </Link>
      </section>
    </main>
  );
}
