"use client";

import { SidebarNav } from "./sidebar-nav";
import { FINANCE_NAV_GROUPS } from "./nav-items";

export function FinanceSidebar(props: {
  basePath: string;
  routes: Record<string, string>;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="UbuntuNow / Biras"
      roleLabel="Finance"
      groups={FINANCE_NAV_GROUPS}
      {...props}
    />
  );
}
