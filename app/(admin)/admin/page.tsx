"use client";

import { useAdminSection } from "@/components/admin/admin-section-context";
import { SectionPlaceholder } from "@/components/shared/section-placeholder";

export default function AdminPage() {
  const section = useAdminSection();
  return <SectionPlaceholder section={section} />;
}
