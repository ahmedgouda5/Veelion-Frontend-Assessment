"use client";

import Link from "next/link";

export default function ReportsError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="stack">
      <nav>
        <Link href="/" className="button">
          Back
        </Link>
      </nav>

      <section className="card card--padded card--error">
        <h1 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
          Reports
        </h1>
        <p
          style={{
            marginTop: 0,
            marginBottom: "var(--space-3)",
            color: "var(--danger)",
          }}
        >
          Could not load the report summary.
        </p>
        <button type="button" className="button" onClick={reset}>
          Retry
        </button>
      </section>
    </main>
  );
}
