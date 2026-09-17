"use client";

import { SidebarNav } from "./sidebar-nav";
import { INDIVIDUAL_NAV_ITEMS } from "./nav-items";

export function IndividualSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Individual" items={INDIVIDUAL_NAV_ITEMS} {...props} />;
}
