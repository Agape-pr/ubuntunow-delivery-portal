"use client";

import { MapPin, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

// `active` isn't shown here (no breadcrumb in this design) but the shell
// passes the same props to every surface's TopBar.
export function PortalTopBar(_props: { active: string }) {
  return (
    <header className="flex items-center gap-gap border-b border-border bg-surface px-section-gap py-3">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-text-muted" />
        <Input placeholder="Search tracking # (e.g. DLV-90821-RW)..." className="h-9 pl-9" />
      </div>
      <div className="text-body-sm flex shrink-0 items-center gap-1 text-text-muted">
        <MapPin className="size-4" />
        Kigali, Rwanda
      </div>
      <Avatar>
        <AvatarFallback className="bg-primary text-on-primary">S</AvatarFallback>
      </Avatar>
    </header>
  );
}
