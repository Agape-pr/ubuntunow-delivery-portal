"use client";

import { createRoleShell } from "@/lib/create-role-shell";
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

/** Same /admin URL for every admin role -- this is what actually swaps the sidebar + section state per role. */
export const AdminShell = createRoleShell<AdminRole>({
  sidebarByRole: {
    super_admin: SuperAdminSidebar,
    biras_dispatcher: DispatcherSidebar,
    biras_manager: ManagerSidebar,
    finance: FinanceSidebar,
  },
  navItemsByRole: {
    super_admin: SUPER_ADMIN_NAV_ITEMS,
    biras_dispatcher: DISPATCHER_NAV_ITEMS,
    biras_manager: MANAGER_NAV_ITEMS,
    finance: FINANCE_NAV_ITEMS,
  },
  SectionProvider: AdminSectionProvider,
});
