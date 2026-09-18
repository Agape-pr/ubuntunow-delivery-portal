"use client";

import { SidebarNav } from "./sidebar-nav";
import { DISPATCHER_NAV_GROUPS } from "./nav-items";

export function DispatcherSidebar(props: {
  basePath: string;
  routes: Record<string, string>;
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
