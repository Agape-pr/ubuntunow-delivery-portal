"use client";

import { usePortalSection } from "@/components/portal/portal-section-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const section = usePortalSection();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-title-lg capitalize">{section.replace(/-/g, " ")}</CardTitle>
        <CardDescription>This section is coming soon.</CardDescription>
      </CardHeader>
      <CardContent className="text-body-sm text-text-muted">
        Wire up data for &quot;{section}&quot; here.
      </CardContent>
    </Card>
  );
}
