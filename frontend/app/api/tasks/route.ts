import { NextResponse } from "next/server";
import { getTasksFromBackend } from "@/lib/backendApi";
import { ApiError } from "@/lib/request";

export async function GET() {
  try {
    const tasks = await getTasksFromBackend();
    return NextResponse.json({ data: tasks }, { status: 200 });
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error ? error.message : "Unable to fetch tasks.",
        },
      },
      { status }
    );
  }
}
