"use client";

import { usePortalSection } from "@/components/portal/portal-section-context";
import { SectionPlaceholder } from "@/components/shared/section-placeholder";
import { TrackDeliveryView } from "@/components/portal/track-delivery-view";

export default function DashboardPage() {
  const section = usePortalSection();

  if (section === "track-delivery") {
    return <TrackDeliveryView />;
  }

  return <SectionPlaceholder section={section} />;
}
