"use client";

import { createSectionContext } from "@/lib/create-section-context";

export const { Provider: AdminSectionProvider, useSection: useAdminSection } =
  createSectionContext<string>("useAdminSection");
