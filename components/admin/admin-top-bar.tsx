"use client";

import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export function AdminTopBar({ active }: { active: string }) {
  const breadcrumb = active.replace(/-/g, " ");

  return (
    <header className="flex items-center gap-gap border-b border-border bg-surface px-section-gap py-3">
      <p className="text-body-sm shrink-0 capitalize text-text-muted">
        DeliveryOS <span className="text-text-dark">/ {breadcrumb}</span>
      </p>
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-text-muted" />
        <Input
          placeholder="Search tracking #, phone, client, driver..."
          className="h-9 pl-9"
        />
      </div>
      <button type="button" className="relative rounded-md p-2 hover:bg-chip-surface">
        <Bell className="size-5 text-text-muted" />
        <Badge variant="destructive" className="absolute -top-1 -right-1 size-4 justify-center rounded-full p-0 text-[10px]">
          2
        </Badge>
      </button>
      <Avatar>
        <AvatarFallback className="bg-primary text-on-primary">A</AvatarFallback>
      </Avatar>
    </header>
  );
}
