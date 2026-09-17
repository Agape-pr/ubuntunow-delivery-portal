"use client";

import { usePortalSection } from "@/components/portal/portal-section-context";
import { SectionPlaceholder } from "@/components/shared/section-placeholder";

export default function DashboardPage() {
  const section = usePortalSection();
  return <SectionPlaceholder section={section} />;
}
