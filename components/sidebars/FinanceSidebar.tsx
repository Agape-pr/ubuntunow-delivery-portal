"use client";

import { SidebarNav } from "./sidebar-nav";
import { FINANCE_NAV_GROUPS } from "./nav-items";

export function FinanceSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
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
