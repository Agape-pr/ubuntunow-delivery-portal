"use client";

import { useCallback, useState, type ComponentType, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import type { NavItem } from "@/components/sidebars/nav-items";

interface SidebarProps {
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}

interface SectionProviderProps {
  value: string;
  children: ReactNode;
}

/**
 * AdminShell and PortalShell are the same shell instantiated for two
 * different role sets -- same pattern as createSectionContext, one level up
 * (sidebar + active-section state + logout, instead of just the context).
 */
export function createRoleShell<Role extends string>(config: {
  sidebarByRole: Record<Role, ComponentType<SidebarProps>>;
  navItemsByRole: Record<Role, NavItem[]>;
  SectionProvider: ComponentType<SectionProviderProps>;
}) {
  return function RoleShell({ role, children }: { role: Role; children: ReactNode }) {
    const items = config.navItemsByRole[role];
    const [active, setActive] = useState(items[0].key);
    const router = useRouter();
    const Sidebar: ComponentType<SidebarProps> = config.sidebarByRole[role];
    const SectionProvider = config.SectionProvider;

    const handleLogout = useCallback(async () => {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    }, [router]);

    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar active={active} onSelect={setActive} onLogout={handleLogout} />
        <main className="flex-1 overflow-y-auto p-section-gap">
          <SectionProvider value={active}>{children}</SectionProvider>
        </main>
      </div>
    );
  };
}
