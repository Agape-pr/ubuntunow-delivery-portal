import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { PortalShell } from "@/components/portal/portal-shell";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isPortalRole } from "@/types/auth";

// Defense in depth -- proxy.ts already keeps admin roles out of /dashboard,
// this is the same check run again at render time.
export default async function PortalLayout({ children }: { children: ReactNode }) {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;

  if (!role || !isPortalRole(role)) {
    redirect("/login");
  }

  return <PortalShell role={role}>{children}</PortalShell>;
}
