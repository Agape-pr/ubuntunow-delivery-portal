import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ACCESS_TOKEN_COOKIE, ROLE_COOKIE } from "@/lib/auth-cookies";
import { homeRouteForRole, type Role } from "@/types/auth";


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

  // Every role -- admin and portal alike -- lives under /dashboard; this is
  // just the "must be logged in" gate. Which *features* a role can reach
  // within /dashboard is enforced by the (admin-only)/(portal-only) route
  // group layouts, not here -- there's no URL prefix left to key off.
  if (pathname.startsWith("/dashboard") && !isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
