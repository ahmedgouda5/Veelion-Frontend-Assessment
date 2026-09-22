import Link from "next/link";
import type { Metadata } from "next";
import { TaskDashboard } from "@/components/tasks/TaskDashboard";

export const metadata: Metadata = {
  title: "Task Dashboard | VeeLion",
  description: "View, filter, and update task completion status",
};

export default function TasksPage() {
  return (
    <main className="stack">
      <nav>
        <Link href="/" className="button">
          Back
        </Link>
      </nav>
      <TaskDashboard />
    </main>
  );
}
