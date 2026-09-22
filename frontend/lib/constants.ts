const configured = process.env.BACKEND_API_URL;
const devFallback =
  process.env.NODE_ENV === "development" ? "http://localhost:4000" : undefined;

const baseUrl = configured || devFallback;

if (!baseUrl) {
  throw new Error(
    "BACKEND_API_URL is not set. Add it to your environment (see .env.example)."
  );
}

export const BACKEND_BASE_URL = baseUrl;
