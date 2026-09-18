"use client";

import { cn } from "cn";
import { Button } from "@/components/ui/button";
import type { NavItem } from "./nav-items";

/** Shared rendering for every role's sidebar -- each role file below just supplies its heading + item list. */
export function SidebarNav({
  heading,
  items,
  active,
  onSelect,
  onLogout,
}: {
  heading: string;
  items: NavItem[];
  active: string;
  onSelect: (key: string) => void;
  onLogout: () => void;
}) {
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-border bg-surface p-screen-h">
      <div className="text-label-caps px-2 pb-section-gap text-text-muted">{heading}</div>
      <nav className="flex flex-1 flex-col gap-1">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            className={cn(
              "text-body-sm rounded-md px-3 py-2 text-left transition-colors",
              active === item.key
                ? "bg-primary/10 font-semibold text-primary"
                : "text-text-dark hover:bg-chip-surface"
            )}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <Button variant="outline" size="sm" onClick={onLogout} className="mt-section-gap">
        Log out
      </Button>
    </aside>
  );
}
