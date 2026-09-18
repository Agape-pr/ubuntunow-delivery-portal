"use client";

import { createRoleShell } from "@/lib/create-role-shell";
import type { PortalRole } from "@/types/auth";
import { PORTAL_ROUTES } from "@/components/sidebars/nav-items";
import { BusinessClientSidebar } from "@/components/sidebars/BusinessClientSidebar";
import { IndividualSidebar } from "@/components/sidebars/IndividualSidebar";
import { PortalTopBar } from "./portal-top-bar";

/** Portal roles share /dashboard with admin roles -- real routed pages per feature, sidebar/labels differ per role. */
export const PortalShell = createRoleShell<PortalRole>({
  sidebarByRole: {
    business_client: BusinessClientSidebar,
    individual: IndividualSidebar,
  },
  basePath: "/dashboard",
  routes: PORTAL_ROUTES,
  TopBar: PortalTopBar,
});
