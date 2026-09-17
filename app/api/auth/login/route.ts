import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { backendFetch } from "@/lib/backend";
import {
  ACCESS_TOKEN_COOKIE,
  ACCESS_TOKEN_MAX_AGE,
  REFRESH_TOKEN_COOKIE,
  REFRESH_TOKEN_MAX_AGE,
  ROLE_COOKIE,
} from "@/lib/auth-cookies";
import type { ApiEnvelope, LoginRequest, LoginResponseData } from "@/types/auth";

export async function POST(request: Request) {
  const { email, password } = (await request.json()) as LoginRequest;

  const backendRes = await backendFetch("/auth/login/", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const envelope = (await backendRes.json()) as ApiEnvelope<LoginResponseData>;

  if (!envelope.success) {
    return NextResponse.json(envelope, { status: backendRes.status });
  }

  const { access, refresh, role } = envelope.data;
  const cookieStore = await cookies();
  const secure = process.env.NODE_ENV === "production";

  cookieStore.set(ACCESS_TOKEN_COOKIE, access, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: ACCESS_TOKEN_MAX_AGE,
  });
  cookieStore.set(REFRESH_TOKEN_COOKIE, refresh, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: REFRESH_TOKEN_MAX_AGE,
  });
  cookieStore.set(ROLE_COOKIE, role, {
    httpOnly: true,
    secure,
    sameSite: "lax",
    path: "/",
    maxAge: REFRESH_TOKEN_MAX_AGE,
  });

  return NextResponse.json({ success: true, data: { role } });
}
