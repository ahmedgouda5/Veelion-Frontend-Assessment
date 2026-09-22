"use client";

import { formatTime } from "@/lib/activity";
import { useActivity } from "@/hooks/useActivity";
import type { ActivityLog } from "@/types/api";

type ActivityFeedProps = {
  initialActivity: ActivityLog[] | null;
};

export function ActivityFeed({ initialActivity }: ActivityFeedProps) {
  const { shownActivity, total, query, setQuery, loading, error, reload } =
    useActivity(initialActivity);

  return (
    <>
      <section className="card card--padded">
        <h1 style={{ marginTop: 0, marginBottom: "var(--space-2)" }}>
          Activity Feed
        </h1>

        <label className="visually-hidden" htmlFor="activity-search">
          Search activity
        </label>
        <input
          id="activity-search"
          className="input"
          placeholder="Search activity"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </section>

      <section className="card card--padded">
        <small style={{ color: "var(--muted)" }}>
          Total: {total} | Visible: {shownActivity.length}
        </small>
      </section>

      {loading ? (
        <section className="card card--padded">
          <p style={{ margin: 0 }}>Loading activity...</p>
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
        <section className="card card--padded" aria-label="Activity list">
          {shownActivity.length === 0 ? (
            <p style={{ margin: 0, color: "var(--muted)" }}>
              No activity matches this search.
            </p>
          ) : (
            <ul className="activity-list">
              {shownActivity.map((item) => (
                <li key={item.id} className="activity-item">
                  <div className="activity-item__title">
                    {item.action || "(no action)"}
                  </div>
                  <div>{item.info || "(no info)"}</div>
                  <small style={{ color: "var(--muted)" }}>
                    {formatTime(item.when)}
                  </small>
                </li>
              ))}
            </ul>
          )}
        </section>
      ) : null}
    </>
  );
}
