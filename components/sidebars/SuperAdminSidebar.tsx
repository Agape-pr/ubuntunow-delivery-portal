"use client";

import { SidebarNav } from "./sidebar-nav";
import { SUPER_ADMIN_NAV_GROUPS } from "./nav-items";

export function SuperAdminSidebar(props: {
  basePath: string;
  routes: Record<string, string>;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="UbuntuNow / Biras"
      roleLabel="Super Admin"
      groups={SUPER_ADMIN_NAV_GROUPS}
      {...props}
    />
  );
}
