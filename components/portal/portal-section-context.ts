"use client";

import { createSectionContext } from "@/lib/create-section-context";

export const { Provider: PortalSectionProvider, useSection: usePortalSection } =
  createSectionContext<string>("usePortalSection");
