import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isAdminRole } from "@/types/auth";

// Defense in depth -- proxy.ts already keeps non-admin roles out of /admin,
// this is the same check run again at render time.
export default async function AdminLayout({ children }: { children: ReactNode }) {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;

  if (!role || !isAdminRole(role)) {
    redirect("/login");
  }

  return <AdminShell role={role}>{children}</AdminShell>;
}
