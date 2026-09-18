import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE, ROLE_COOKIE } from "@/lib/auth-cookies";
import { homeRouteForRole, isAdminRole, isPortalRole, type Role } from "@/types/auth";

/**
 * UX-level route gate: picks the right shell fast and bounces obviously-wrong
 * requests before they render. It is NOT the authorization boundary -- the
 * Django backend verifies the JWT on every API call regardless of what this
 * decides, so a forged role cookie can get past this file but can't get past
 * the backend.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE)?.value;
  const role = request.cookies.get(ROLE_COOKIE)?.value as Role | undefined;
  const isAuthenticated = Boolean(accessToken && role);

  if (pathname === "/login") {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL(homeRouteForRole(role!), request.url));
    }
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(
      new URL(isAuthenticated ? homeRouteForRole(role!) : "/login", request.url)
    );
  }

  const surfaceGuards: { prefix: string; isAllowed: (role: Role) => boolean; fallback: string }[] = [
    { prefix: "/dashboard", isAllowed: isPortalRole, fallback: "/admin" },
    { prefix: "/admin", isAllowed: isAdminRole, fallback: "/dashboard" },
  ];

  for (const guard of surfaceGuards) {
    if (!pathname.startsWith(guard.prefix)) continue;

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (!guard.isAllowed(role!)) {
      return NextResponse.redirect(new URL(guard.fallback, request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
