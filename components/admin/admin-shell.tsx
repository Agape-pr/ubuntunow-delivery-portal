"use client";

import { createRoleShell } from "@/lib/create-role-shell";
import type { AdminRole } from "@/types/auth";
import { ADMIN_ROUTES } from "@/components/sidebars/nav-items";
import { SuperAdminSidebar } from "@/components/sidebars/SuperAdminSidebar";
import { DispatcherSidebar } from "@/components/sidebars/DispatcherSidebar";
import { ManagerSidebar } from "@/components/sidebars/ManagerSidebar";
import { FinanceSidebar } from "@/components/sidebars/FinanceSidebar";
import { AdminTopBar } from "./admin-top-bar";

/** Admin roles share /dashboard with portal roles -- real routed pages per feature, sidebar/labels differ per role. */
export const AdminShell = createRoleShell<AdminRole>({
  sidebarByRole: {
    super_admin: SuperAdminSidebar,
    biras_dispatcher: DispatcherSidebar,
    biras_manager: ManagerSidebar,
    finance: FinanceSidebar,
  },
  basePath: "/dashboard",
  routes: ADMIN_ROUTES,
  TopBar: AdminTopBar,
});
