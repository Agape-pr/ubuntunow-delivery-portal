import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isAdminRole } from "@/types/auth";

// This route group is URL-transparent (no "admin-only" segment in the path)
// -- it exists purely to gate these pages to admin roles without the URL
// ever saying "admin". A portal role landing here (deep link, stale
// bookmark) is bounced back to /dashboard.
export default async function AdminOnlyLayout({ children }: { children: ReactNode }) {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;

  if (!role || !isAdminRole(role)) {
    redirect("/dashboard");
  }

  return children;
}
