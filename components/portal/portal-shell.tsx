"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { PortalRole } from "@/types/auth";
import { BusinessClientSidebar } from "@/components/sidebars/BusinessClientSidebar";
import { IndividualSidebar } from "@/components/sidebars/IndividualSidebar";
import { BUSINESS_CLIENT_NAV_ITEMS, INDIVIDUAL_NAV_ITEMS } from "@/components/sidebars/nav-items";
import { PortalSectionProvider } from "./portal-section-context";

const SIDEBAR_BY_ROLE = {
  business_client: BusinessClientSidebar,
  individual: IndividualSidebar,
} as const;

const NAV_ITEMS_BY_ROLE = {
  business_client: BUSINESS_CLIENT_NAV_ITEMS,
  individual: INDIVIDUAL_NAV_ITEMS,
} as const;

/** Same /dashboard URL for business_client and individual -- the sidebar and section list differ per role. */
export function PortalShell({ role, children }: { role: PortalRole; children: ReactNode }) {
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
        <PortalSectionProvider value={active}>{children}</PortalSectionProvider>
      </main>
    </div>
  );
}
