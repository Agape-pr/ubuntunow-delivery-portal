import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin/admin-shell";
import { PortalShell } from "@/components/portal/portal-shell";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isAdminRole, isPortalRole } from "@/types/auth";

/**
 * Every role -- admin and portal alike -- lives under /dashboard now; only
 * the shell (sidebar/top bar) differs. Role-specific *feature* access
 * (admin-only vs portal-only pages) is enforced one level down, by the
 * (admin-only)/layout.tsx and (portal-only)/layout.tsx route groups --
 * this layout only checks that *someone* is logged in.
 */
export default async function DashboardLayout({ children }: { children: ReactNode }) {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;

  if (!role) {
    redirect("/login");
  }

  if (isAdminRole(role)) {
    return <AdminShell role={role}>{children}</AdminShell>;
  }
  if (isPortalRole(role)) {
    return <PortalShell role={role}>{children}</PortalShell>;
  }

  redirect("/login");
}
