const BACKEND_URL = process.env.BACKEND_API_URL ?? "http://localhost:8000/api/v1";

/** Calls deliverOs-be. Only ever used from server code (route handlers) -- never exposes the backend URL to the browser. */
export function backendFetch(path: string, init?: RequestInit) {
  return fetch(`${BACKEND_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });
}
