import Link from "next/link";
import type { Metadata } from "next";
import { ActivityFeed } from "@/components/activity/ActivityFeed";
import { getActivityFromBackend } from "@/lib/backendApi";
import type { ActivityLog } from "@/types/api";

export const metadata: Metadata = {
  title: "Activity Feed | VeeLion",
  description: "Live log of recent system activity",
};

export default async function ActivityPage() {
  let initialActivity: ActivityLog[] | null = null;

  try {
    initialActivity = await getActivityFromBackend();
  } catch {
    initialActivity = null;
  }

  return (
    <main className="stack">
      <nav>
        <Link href="/" className="button">
          Back
        </Link>
      </nav>

      <ActivityFeed initialActivity={initialActivity} />
    </main>
  );
}
