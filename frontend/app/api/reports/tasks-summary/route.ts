import { NextResponse } from "next/server";
import { getReportsSummaryFromBackend } from "@/lib/backendApi";
import { ApiError } from "@/lib/request";

export async function GET() {
  try {
    const summary = await getReportsSummaryFromBackend();
    return NextResponse.json(summary, { status: 200 });
  } catch (error) {
    const status = error instanceof ApiError ? error.statusCode : 500;
    return NextResponse.json(
      {
        error: {
          message:
            error instanceof Error
              ? error.message
              : "Unable to fetch reports summary.",
        },
      },
      { status }
    );
  }
}
