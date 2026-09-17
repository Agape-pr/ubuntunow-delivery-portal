"use client";

import { useAdminSection } from "@/components/admin/admin-section-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const section = useAdminSection();

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
