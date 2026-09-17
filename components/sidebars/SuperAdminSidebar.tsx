"use client";

import { SidebarNav } from "./sidebar-nav";
import { SUPER_ADMIN_NAV_ITEMS } from "./nav-items";

export function SuperAdminSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Super Admin" items={SUPER_ADMIN_NAV_ITEMS} {...props} />;
}
