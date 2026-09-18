"use client";

import { SidebarNav } from "./sidebar-nav";
import { DISPATCHER_NAV_ITEMS } from "./nav-items";

export function DispatcherSidebar(props: {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return <SidebarNav heading="Dispatcher" items={DISPATCHER_NAV_ITEMS} {...props} />;
}
