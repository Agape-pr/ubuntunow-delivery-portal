"use client";

import { SidebarNav } from "./sidebar-nav";
import { FINANCE_NAV_ITEMS } from "./nav-items";

export function FinanceSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Finance" items={FINANCE_NAV_ITEMS} {...props} />;
}
