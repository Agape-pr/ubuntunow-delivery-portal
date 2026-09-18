"use client";

import { SidebarNav } from "./sidebar-nav";
import { BUSINESS_CLIENT_NAV_ITEMS } from "./nav-items";

export function BusinessClientSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Business Client" items={BUSINESS_CLIENT_NAV_ITEMS} {...props} />;
}
