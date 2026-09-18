"use client";

import { createRoleShell } from "@/lib/create-role-shell";
import type { PortalRole } from "@/types/auth";
import { BusinessClientSidebar } from "@/components/sidebars/BusinessClientSidebar";
import { IndividualSidebar } from "@/components/sidebars/IndividualSidebar";
import { BUSINESS_CLIENT_NAV_ITEMS, INDIVIDUAL_NAV_ITEMS } from "@/components/sidebars/nav-items";
import { PortalSectionProvider } from "./portal-section-context";

/** Same /dashboard URL for business_client and individual -- the sidebar and section list differ per role. */
export const PortalShell = createRoleShell<PortalRole>({
  sidebarByRole: {
    business_client: BusinessClientSidebar,
    individual: IndividualSidebar,
  },
  navItemsByRole: {
    business_client: BUSINESS_CLIENT_NAV_ITEMS,
    individual: INDIVIDUAL_NAV_ITEMS,
  },
  SectionProvider: PortalSectionProvider,
});
