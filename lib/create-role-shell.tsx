"use client";

import { useCallback, type ComponentType, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarProps {
  basePath: string;
  routes: Record<string, string>;
  onLogout: () => void;
}

/**
 * AdminShell and PortalShell are the same shell instantiated for two
 * different role sets -- sidebar + top bar + logout, with each role's
 * children being real routed pages under `basePath` (see nav-items.ts'
 * ADMIN_ROUTES/PORTAL_ROUTES). The current section is read straight off the
 * URL (usePathname), not held in state, so back/forward and deep links work.
 */
export function createRoleShell<Role extends string>(config: {
  sidebarByRole: Record<Role, ComponentType<SidebarProps>>;
  basePath: string;
  routes: Record<string, string>;
  TopBar: ComponentType<{ active: string }>;
}) {
  return function RoleShell({ role, children }: { role: Role; children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const Sidebar: ComponentType<SidebarProps> = config.sidebarByRole[role];
    const { TopBar, basePath, routes } = config;

    const handleLogout = useCallback(async () => {
      await fetch("/api/auth/logout", { method: "POST" });
      router.replace("/login");
      router.refresh();
    }, [router]);

    // The last path segment beyond basePath, e.g. "/dashboard/drivers/roster" -> "roster".
    // Falls back to "dashboard" at the surface root itself.
    const active = pathname.slice(basePath.length).split("/").filter(Boolean).pop() ?? "dashboard";

    return (
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar basePath={basePath} routes={routes} onLogout={handleLogout} />
        <div className="flex flex-1 flex-col">
          <TopBar active={active} />
          <main className="flex-1 overflow-y-auto p-section-gap">{children}</main>
        </div>
      </div>
    );
  };
}
