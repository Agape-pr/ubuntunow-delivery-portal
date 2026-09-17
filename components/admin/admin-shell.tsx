"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { AdminRole } from "@/types/auth";
import { SuperAdminSidebar } from "@/components/sidebars/SuperAdminSidebar";
import { DispatcherSidebar } from "@/components/sidebars/DispatcherSidebar";
import { ManagerSidebar } from "@/components/sidebars/ManagerSidebar";
import { FinanceSidebar } from "@/components/sidebars/FinanceSidebar";
import {
  DISPATCHER_NAV_ITEMS,
  FINANCE_NAV_ITEMS,
  MANAGER_NAV_ITEMS,
  SUPER_ADMIN_NAV_ITEMS,
} from "@/components/sidebars/nav-items";
import { AdminSectionProvider } from "./admin-section-context";

const SIDEBAR_BY_ROLE = {
  super_admin: SuperAdminSidebar,
  biras_dispatcher: DispatcherSidebar,
  biras_manager: ManagerSidebar,
  finance: FinanceSidebar,
} as const;

const NAV_ITEMS_BY_ROLE = {
  super_admin: SUPER_ADMIN_NAV_ITEMS,
  biras_dispatcher: DISPATCHER_NAV_ITEMS,
  biras_manager: MANAGER_NAV_ITEMS,
  finance: FINANCE_NAV_ITEMS,
} as const;

/** Same /admin URL for every admin role -- this is what actually swaps the sidebar + section state per role. */
export function AdminShell({ role, children }: { role: AdminRole; children: ReactNode }) {
  const items = NAV_ITEMS_BY_ROLE[role];
  const [active, setActive] = useState(items[0].key);
  const router = useRouter();
  const Sidebar = SIDEBAR_BY_ROLE[role];

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.replace("/login");
    router.refresh();
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar active={active} onSelect={setActive} onLogout={handleLogout} />
      <main className="flex-1 overflow-y-auto p-section-gap">
        <AdminSectionProvider value={active}>{children}</AdminSectionProvider>
      </main>
    </div>
  );
}
