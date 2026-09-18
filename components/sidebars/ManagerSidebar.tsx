"use client";

import { SidebarNav } from "./sidebar-nav";
import { MANAGER_NAV_ITEMS } from "./nav-items";

export function ManagerSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Biras Manager" items={MANAGER_NAV_ITEMS} {...props} />;
}
