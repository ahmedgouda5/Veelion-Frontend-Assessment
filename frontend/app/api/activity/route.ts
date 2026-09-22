import { NextResponse } from "next/server";
import { getActivityFromBackend } from "@/lib/backendApi";
import { ApiError } from "@/lib/request";

export async function GET() {
  try {
    const logs = await getActivityFromBackend();
    return NextResponse.json({ data: logs }, { status: 200 });
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error
              ? error.message
              : "Unable to fetch activity logs.",
        },
      },
      { status }
    );
  }
}
