"use client";

import { SidebarNav } from "./sidebar-nav";
import { INDIVIDUAL_NAV_GROUPS } from "./nav-items";

export function IndividualSidebar(props: {
  basePath: string;
  routes: Record<string, string>;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="Sender Portal"
      roleLabel="Individual"
      groups={INDIVIDUAL_NAV_GROUPS}
      {...props}
    />
  );
}
