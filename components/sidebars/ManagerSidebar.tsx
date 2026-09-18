"use client";

import { SidebarNav } from "./sidebar-nav";
import { MANAGER_NAV_GROUPS } from "./nav-items";

export function ManagerSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="UbuntuNow / Biras"
      roleLabel="Biras Manager"
      groups={MANAGER_NAV_GROUPS}
      {...props}
    />
  );
}
