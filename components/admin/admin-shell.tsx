"use client";

import { createRoleShell } from "@/lib/create-role-shell";
import type { AdminRole } from "@/types/auth";
import { SuperAdminSidebar } from "@/components/sidebars/SuperAdminSidebar";
import { DispatcherSidebar } from "@/components/sidebars/DispatcherSidebar";
import { ManagerSidebar } from "@/components/sidebars/ManagerSidebar";
import { FinanceSidebar } from "@/components/sidebars/FinanceSidebar";
import { AdminSectionProvider } from "./admin-section-context";
import { AdminTopBar } from "./admin-top-bar";

/** Same /admin URL for every admin role -- this is what actually swaps the sidebar + section state per role. */
export const AdminShell = createRoleShell<AdminRole>({
  sidebarByRole: {
    super_admin: SuperAdminSidebar,
    biras_dispatcher: DispatcherSidebar,
    biras_manager: ManagerSidebar,
    finance: FinanceSidebar,
  },
  SectionProvider: AdminSectionProvider,
  TopBar: AdminTopBar,
});
