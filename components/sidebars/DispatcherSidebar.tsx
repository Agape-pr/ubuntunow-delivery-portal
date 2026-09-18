"use client";

import { SidebarNav } from "./sidebar-nav";
import { DISPATCHER_NAV_GROUPS } from "./nav-items";

export function DispatcherSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="UbuntuNow / Biras"
      roleLabel="Biras Dispatcher"
      groups={DISPATCHER_NAV_GROUPS}
      {...props}
    />
  );
}
