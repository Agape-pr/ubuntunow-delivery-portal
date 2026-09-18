"use client";

import { SidebarNav } from "./sidebar-nav";
import { BUSINESS_CLIENT_NAV_GROUPS } from "./nav-items";

export function BusinessClientSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return (
    <SidebarNav
      subheading="Business Sender Portal"
      roleLabel="Business Client"
      groups={BUSINESS_CLIENT_NAV_GROUPS}
      {...props}
    />
  );
}
