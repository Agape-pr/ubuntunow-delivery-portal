"use client";

import { createRoleShell } from "@/lib/create-role-shell";
import type { PortalRole } from "@/types/auth";
import { BusinessClientSidebar } from "@/components/sidebars/BusinessClientSidebar";
import { IndividualSidebar } from "@/components/sidebars/IndividualSidebar";
import { PortalSectionProvider } from "./portal-section-context";
import { PortalTopBar } from "./portal-top-bar";

/** Same /dashboard URL for business_client and individual -- the sidebar and section list differ per role. */
export const PortalShell = createRoleShell<PortalRole>({
  sidebarByRole: {
    business_client: BusinessClientSidebar,
    individual: IndividualSidebar,
  },
  SectionProvider: PortalSectionProvider,
  TopBar: PortalTopBar,
});
