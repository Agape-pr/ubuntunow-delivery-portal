"use client";

import { useAdminSection } from "@/components/admin/admin-section-context";
import { OperationalDashboard } from "@/components/admin/operational-dashboard";
import { SectionPlaceholder } from "@/components/shared/section-placeholder";

export default function AdminPage() {
  const section = useAdminSection();

  if (section === "dashboard") {
    return <OperationalDashboard />;
  }

  return <SectionPlaceholder section={section} />;
}
