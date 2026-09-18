import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { ROLE_COOKIE } from "@/lib/auth-cookies";
import { isPortalRole } from "@/types/auth";

// URL-transparent route group, same reasoning as (admin-only)/layout.tsx
// but for the reverse direction -- gates these pages to portal roles.
export default async function PortalOnlyLayout({ children }: { children: ReactNode }) {
  const role = (await cookies()).get(ROLE_COOKIE)?.value;

  if (!role || !isPortalRole(role)) {
    redirect("/dashboard");
  }

  return children;
}
