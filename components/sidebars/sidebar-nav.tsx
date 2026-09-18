"use client";

import { useState } from "react";
import { cn } from "cn";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NAV_GROUP_ICONS, NAV_ICONS, NAV_ICON_FALLBACK } from "./nav-icons";
import type { NavGroup } from "./nav-items";

/**
 * Sidebar shared by every role, admin and portal alike. Every row -- whether
 * it's a leaf item or a group that expands into children -- shares one
 * visual weight (same icon size, same text size/opacity); only the trailing
 * chevron marks a row as expandable. "Dashboard" is the one exception: a
 * standalone full-width pill, always visually distinct from the rest of the
 * list. Expanded groups draw a tree connector (trunk + branch per child)
 * down to their items. Each group's expand/collapse state is independent --
 * opening one has no effect on the others.
 */
export function SidebarNav({
  subheading,
  roleLabel,
  groups,
  active,
  onSelect,
  onLogout,
}: {
  subheading: string;
  roleLabel: string;
  groups: NavGroup[];
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  const router = useRouter();
  // Accordion: at most one group open at a time -- expanding a new one
  // implicitly closes whichever was open, since this only ever holds one label.
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  function toggleGroup(label: string) {
    setExpandedGroup((prev) => (prev === label ? null : label));
  }

  return (
    <aside className="flex w-80 shrink-0 flex-col bg-sidebar-dark text-on-overlay-dark">
      <div className="border-b border-white/10 p-screen-h">
        <p className="text-title-md text-on-overlay-dark">DeliveryOS</p>
        <p className="text-caption text-on-overlay-dark/60">{subheading}</p>
      </div>
      <nav
        className={cn(
          "flex flex-1 flex-col gap-2 overflow-y-auto p-screen-h",
          "[scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.25)_transparent]",
          "[&::-webkit-scrollbar]:w-2",
          "[&::-webkit-scrollbar-track]:bg-transparent",
          "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-white/25"
        )}
      >
        {groups.map((group) => {
          // Only treat "dashboard" as the standalone pill when it's alone in
          // its group -- otherwise rendering just the pill would silently
          // drop every sibling item in that group.
          const dashboardItem =
            group.items.length === 1 && group.items[0].key === "dashboard" ? group.items[0] : undefined;

          if (dashboardItem) {
            const DashboardIcon = NAV_ICONS[dashboardItem.key] ?? NAV_ICON_FALLBACK;
            return (
              <button
                key={dashboardItem.key}
                type="button"
                onClick={() => onSelect(dashboardItem.key)}
                className={cn(
                  "mb-2 flex items-center justify-between rounded-full px-4 py-3 text-left transition-colors",
                  active === dashboardItem.key
                    ? "bg-primary text-on-primary"
                    : "bg-white/5 text-on-overlay-dark hover:bg-white/10"
                )}
              >
                <span className="text-body-lg font-semibold whitespace-nowrap">{dashboardItem.label}</span>
                <DashboardIcon className="size-5 shrink-0" />
              </button>
            );
          }

          if (!group.label) {
            return group.items.map((item) => (
              <NavRow key={item.key} item={item} active={active} onSelect={onSelect} />
            ));
          }

          const GroupIcon = NAV_GROUP_ICONS[group.label] ?? NAV_ICON_FALLBACK;
          const isExpanded = expandedGroup === group.label;
          // A group header is a selectable row too, sharing the same `active`
          // value as every flat item and Dashboard. It's also active
          // whenever one of its own children is the active item -- a
          // selected child and its parent group are both "active" (parent in
          // full, child in a lighter tone via NavRow), unlike two unrelated
          // top-level rows, which can never both be active.
          const groupKey = group.label.toLowerCase();
          const isActive = active === groupKey || group.items.some((item) => item.key === active);

          return (
            <div key={group.label} className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => {
                  toggleGroup(group.label!);
                  onSelect(groupKey);
                }}
                className={cn(
                  "text-body-sm flex items-center justify-between rounded-md px-3 py-3 text-left transition-colors",
                  isActive
                    ? "bg-primary font-semibold text-on-primary"
                    : "text-on-overlay-dark/80 hover:bg-white/5"
                )}
              >
                <span className="flex items-center gap-2.5 whitespace-nowrap">
                  <GroupIcon className="size-5 shrink-0" />
                  {group.label}
                </span>
                <ChevronDown
                  className={cn("size-4 shrink-0 transition-transform", isExpanded && "rotate-180")}
                />
              </button>
              {isExpanded ? (
                <div className="relative flex flex-col gap-1.5 pl-9">
                  <div className="absolute top-0 bottom-0 left-4 w-px bg-white/15" aria-hidden />
                  {group.items.map((item) => (
                    <div key={item.key} className="relative">
                      <span
                        className="absolute -left-5 top-1/2 h-px w-5 -translate-y-1/2 bg-white/15"
                        aria-hidden
                      />
                      <NavRow item={item} active={active} onSelect={onSelect} compact />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
      <div className="border-t border-white/10 p-screen-h">
        <p className="text-body-sm font-semibold text-on-overlay-dark">{roleLabel}</p>
        <div className="mt-2 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-white/20 bg-transparent text-on-overlay-dark hover:bg-white/10"
            onClick={() => router.push("/login")}
          >
            Switch Role
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-white/20 bg-transparent text-on-overlay-dark hover:bg-white/10"
            onClick={onLogout}
          >
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}

function NavRow({
  item,
  active,
  onSelect,
  compact,
}: {
  item: { key: string; label: string; badge?: string | number };
  active: string;
  onSelect: (key: string) => void;
  compact?: boolean;
}) {
  const ItemIcon = NAV_ICONS[item.key] ?? NAV_ICON_FALLBACK;
  const isActive = active === item.key;

  return (
    <button
      type="button"
      onClick={() => onSelect(item.key)}
      className={cn(
        "text-body-sm flex w-full items-center justify-between rounded-md px-3 text-left transition-colors",
        compact ? "py-2" : "py-3",
        isActive
          ? compact
            ? "bg-primary/10 font-semibold text-primary"
            : "bg-primary font-semibold text-on-primary"
          : "text-on-overlay-dark/80 hover:bg-white/5"
      )}
    >
      <span className="flex items-center gap-2.5 whitespace-nowrap">
        <ItemIcon className="size-5 shrink-0" />
        {item.label}
      </span>
      {item.badge !== undefined ? (
        <Badge variant={isActive ? "secondary" : "outline"} className="border-white/20 text-system-yellow">
          {item.badge}
        </Badge>
      ) : null}
    </button>
  );
}
