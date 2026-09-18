"use client";

import { useCallback, useState, type ComponentType, type ReactNode } from "react";
import { useRouter } from "next/navigation";

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
 * (sidebar + top bar + active-section state + logout, instead of just the
 * context). Every role's sidebar starts on "dashboard".
 */
export function createRoleShell<Role extends string>(config: {
  sidebarByRole: Record<Role, ComponentType<SidebarProps>>;
  SectionProvider: ComponentType<SectionProviderProps>;
  TopBar: ComponentType<{ active: string }>;
}) {
  return function RoleShell({ role, children }: { role: Role; children: ReactNode }) {
    const [active, setActive] = useState("dashboard");
    const router = useRouter();
    const Sidebar: ComponentType<SidebarProps> = config.sidebarByRole[role];
    const { SectionProvider, TopBar } = config;

    const handleLogout = useCallback(async () => {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    }, [router]);

    return (
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar active={active} onSelect={setActive} onLogout={handleLogout} />
        <div className="flex flex-1 flex-col">
          <TopBar active={active} />
          <main className="flex-1 overflow-y-auto p-section-gap">
            <SectionProvider value={active}>{children}</SectionProvider>
          </main>
        </div>
      </div>
    );
  };
}
