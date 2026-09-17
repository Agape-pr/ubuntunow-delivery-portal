"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ADMIN_ROLES, PORTAL_ROLES, homeRouteForRole, type Role } from "@/types/auth";

const ALL_ROLES: Role[] = [...ADMIN_ROLES, ...PORTAL_ROLES];

const ROLE_LABELS: Record<Role, string> = {
  super_admin: "Super Admin",
  biras_dispatcher: "Biras Dispatcher",
  biras_manager: "Biras Manager",
  finance: "Finance",
  business_client: "Business Client",
  individual: "Individual",
};

/**
 * Dev-only: fakes a logged-in session by writing plain (non-httpOnly) cookies
 * that the real proxy.ts / layout guards already read as "authenticated".
 * Lets us preview every role's sidebar before real login is wired end to
 * end. Delete this component (and its use in the login page) once that's in
 * place -- it is not a substitute for auth, it just skips it.
 */
export function RolePreviewSwitcher() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("super_admin");

  function handlePreview() {
    document.cookie = "deliveryos_access=dev-preview; path=/";
    document.cookie = `deliveryos_role=${role}; path=/`;
    router.push(homeRouteForRole(role));
    router.refresh();
  }

  return (
    <div className="mt-section-gap flex flex-col gap-2 border-t border-border pt-section-gap">
      <p className="text-caption text-text-muted">
        Dev preview -- skip login and view a role&apos;s sidebar directly.
      </p>
      <div className="flex gap-2">
        <Select value={role} onValueChange={(value) => setRole(value as Role)}>
          <SelectTrigger className="flex-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {ALL_ROLES.map((r) => (
              <SelectItem key={r} value={r}>
                {ROLE_LABELS[r]}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button type="button" variant="outline" onClick={handlePreview}>
          View
        </Button>
      </div>
    </div>
  );
}
